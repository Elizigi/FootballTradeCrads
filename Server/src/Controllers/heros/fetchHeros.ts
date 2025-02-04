
import { HeroModel } from "../../Model/heroList";
import { MyHeroModel } from "../../Model/myHeroJoinedTable";
import { UserModel } from "../../Model/userModel";
import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function fetchHeros(req: any, res: any) {
  try {
    const { user } = req.cookies;
   
    const decoded = jwt.decode(user, secretKey); 

    if (!user) throw new Error("user not logged in ");

    if (!decoded) throw new Error("error decoding user");

    const id = decoded.userId;

    const userFound = await UserModel.findOne({ _id: id });
    if (!userFound) throw new Error("user not found!");

    const heros = await HeroModel.find();
    if (!heros) {
      res.status(200).json({message:"no data saved", heros});
    }
    heros.forEach(async hero=>{
    const ratings =  await MyHeroModel.find({heroId:hero._id});
    hero.rating =
    ratings.reduce((sum, r) => sum + (r.rating ?? 0), 0) / (ratings.length || 1);    })
    
    res.status(200).json({message:"successfully fetched", heros});
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
