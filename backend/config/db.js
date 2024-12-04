import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://akshatgarg:akshat123@cluster0.bulpi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
