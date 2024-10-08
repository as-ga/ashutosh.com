import mongoose from "mongoose";

export async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    });

    connection.on("error", (error) => {
      console.error("Error connecting to database: ", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
}
