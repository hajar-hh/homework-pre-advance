import mongoose from "mongoose";

const dbConection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hajar:VWvsofjt8fAqYYW5@cluster0.472pg.mongodb.net/member"
    );
    console.log("✔");
  } catch (error) {
    console.log(error);
  }
};

export default dbConection;
