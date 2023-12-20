import mongoose from "mongoose";

export function connectToDB() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
    } else {
        const uri = 'mongodb+srv://fracht:fracht@cluster0.4mkgafj.mongodb.net/'
        return mongoose.connect(uri);
    }
}
