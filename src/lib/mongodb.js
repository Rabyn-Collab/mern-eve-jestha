import mongoose from "mongoose";

const mongo_uri = 'mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/NewShop';


let cached = global.mongoose;


if (!cached) {
  cached = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(mongo_uri).then((val) => {
      return val;
    }).catch((err) => {

    });
  }
  cached.conn = await cached.promise;
  return cached.conn;

}



export default dbConnect;