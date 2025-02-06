
import { MyHeroModel } from "../../Model/myHeroJoinedTable";
import { UserModel } from "../../Model/userModel";
import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function fetchMyHeros(req: any, res: any) {
  try {
    const { user } = req.cookies;
   
    const decoded = jwt.decode(user, secretKey); 

    if (!user) throw new Error("user not logged in ");

    if (!decoded) throw new Error("error decoding user");

    const id = decoded.userId;

    const userFound = await UserModel.findOne({ _id: id });
    if (!userFound) throw new Error("user not found!");

    const myHeros = await MyHeroModel.find({ creatorId: id });
    
    if (!myHeros) {
      res.status(200).json({message:"no data saved", myHeros});
    }

    res.status(200).json({message:"successfully fetched", myHeros});
    
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
