import  { model, Schema } from "mongoose";

const MyHero = new Schema({
    creatorId:String,
    heroId:String,
    rating:{
        type:Number,
        require:true,
    }
});

export const MyHeroModel = model('MyHero',MyHero);