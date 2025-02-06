import { HeroModel } from "../../Model/heroModel";


export async function deleteHero(req: any, res: any) {
  try {
    const { id } = req.params;
   
    if (! id) throw new Error("no hero id provided ");

    const taskFound = await HeroModel.findOneAndDelete({ _id: id });
    if (!taskFound) throw new Error("hero not found!");

    res.status(200).json({message:"successfully fetched", taskFound});
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
