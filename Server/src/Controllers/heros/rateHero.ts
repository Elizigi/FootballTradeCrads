import { MyHeroModel } from "../../Model/myHeroJoinedTable";
import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function rateHero(req: any, res: any) {
  try {
    const { user } = req.cookies;
    const { rating } = req.body;
    const { id: heroId } = req.params;

    if (!user) throw new Error("User not logged in");

    const decoded = jwt.decode(user, secretKey);
    if (!decoded) throw new Error("Error decoding user");

    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      throw new Error("Invalid rating value");
    }


    const id = decoded.userId;
    if (!id) throw new Error("error getting id");

    const _rateHero = 
     new MyHeroModel({
        creatorId:id,
        heroId:heroId,
       rating:rating,
        });
        await _rateHero.validate();
    
       await _rateHero.save();

  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: "Error fetching data", err });
  }
}