import  { model, Schema } from "mongoose";

const HeroSchema = new Schema({
    creatorId:String,
    myCard:Boolean,
    fullName:String,
    img:String,
    team:String,
    age:Number,
    position:String,
    totalRating:{
        type:Number,
        required:true,
    },
    totalRatingCount:{
        type:Number,
        required:true,
    },
});

export const HeroModel = model('Hero',HeroSchema);