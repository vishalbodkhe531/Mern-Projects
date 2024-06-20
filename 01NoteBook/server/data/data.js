import mongoose from "mongoose";

export const databaseConnection = () => {
  mongoose
    .connect(process.env.DB_URI, { DbName: "NoteBookManager" })
    .then(() => console.log(`Database Successfully Connected`))
    .catch((error) =>
      console.log(`Error while connection database : ${error}`)
    );
};
