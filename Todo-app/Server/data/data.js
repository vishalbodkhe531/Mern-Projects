import mongoose from "mongoose";

export const databaseConnection = ()=>{
    mongoose.connect(process.env.DB_URI,{DbName : "TodoApp"})
    .then(()=> console.log(`Database Successfully Connected`))
    .catch((error)=>console.log(`Error while connection Database : ${error}`));
}