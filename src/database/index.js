import mongoose from "mongoose";

export function connectToDB() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
    } else {
        const uri = 'mongodb+srv://priyeston:rasmus@hojland11@cluster0.j5zaqjl.mongodb.net/'
        return mongoose.connect(uri);
    }
}