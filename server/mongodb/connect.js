import mongoose from "mongoose";

const connectDB = (uri) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(uri)
        .then(() => console.log("Coonected to Mongo"))
        .catch((err) => console.log(err));

}

export default connectDB;