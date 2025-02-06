
import { HeroModel } from "../../Model/heroModel";
import { UserModel } from "../../Model/userModel";
import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function filterByRating(req: any, res: any) {
  try {
    const { user } = req.cookies;
    const { id } = req.params;

    const decoded = jwt.decode(user, secretKey); 

    if (!user) throw new Error("user not logged in ");

    if (!decoded) throw new Error("error decoding user");

    const userid = decoded.userId;

    const userFound = await UserModel.findOne({ _id: userid });
    if (!userFound) throw new Error("user not found!");

    const myHeros = await HeroModel.find({ heroId: id });
    if (!myHeros) {
        res.status(200).json({message:"no data saved", myHeros});
      }
   
      myHeros.sort((a, b) => (b.totalRating / b.totalRatingCount) - (a.totalRating / a.totalRatingCount));      

    res.status(200).json({message:"successfully fetched", myHeros});
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
