import { HeroModel } from "../../Model/heroModel";
import { UserModel } from "../../Model/userModel";
import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function addHero(req: any, res: any) {
  try {
    const { user } = req.cookies;
    const { fullName, img, team, age, position } = req.body;
    if (!user) throw new Error("user not logged in ");

    const decoded = jwt.decode(user, secretKey);

    if (!decoded) throw new Error("error decoding user");

    const id = decoded.userId;
    if (!id) throw new Error("error getting id");

    const userFound = await UserModel.findOne({ _id: id });
    if (!userFound) throw new Error("user not found!");

    const _hero = new HeroModel({
      fullName: fullName,
      img: img,
      team: team,
      age: age,
      rating: 0,
      position: position,
      totalRating: 0,
      totalRatingCount: 0,
    });
    await _hero.validate();

    await _hero.save();
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: "Error fetching data", err });
  }
}
