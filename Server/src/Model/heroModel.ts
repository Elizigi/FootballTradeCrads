import  { model, Schema } from "mongoose";

const HeroSchema = new Schema({
    fullName:String,
    img:String,
    team:String,
    age:Number,
    rating:Number,
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