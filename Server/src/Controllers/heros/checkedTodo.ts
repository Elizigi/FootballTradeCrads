import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function checkedTask(req: any, res: any) {
  try {
    const { id } = req.body;
   
    if (! id) throw new Error("no task id provided ");

    //const taskFound = await TodoModel.findOne({ _id: id });
    // if (!taskFound) throw new Error("task not found!");

    // taskFound.isDone=!taskFound.isDone;
    // taskFound.save(); //should be done with updateOne
    // res.status(200).json({message:"successfully fetched", taskFound});
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
