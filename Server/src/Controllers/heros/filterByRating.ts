
import { MyHeroModel } from "../../Model/myHeroJoinedTable";
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

    const myHeros = await MyHeroModel.find({ heroId: id });
    if (!myHeros) {
        res.status(200).json({message:"no data saved", myHeros});
      }
    const heroesWithRatings = await Promise.all(
        myHeros.map(async (myHero) => {
          const ratings = await MyHeroModel.find({ heroId: myHero._id });
          const avgRating =
            ratings.reduce((sum, r) => sum + (r.rating ?? 0), 0) / (ratings.length || 1);
      
          return { ...myHero.toObject(), rating: avgRating };
        })
      );
      
      heroesWithRatings.sort((a, b) => b.rating - a.rating);
      

    res.status(200).json({message:"successfully fetched", heroesWithRatings});
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
