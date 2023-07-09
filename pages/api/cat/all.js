const mongoose = require('mongoose');

const mongo_uri = process.env.MONGODB_URI;

mongoose.connect(mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'cat'
  }
);
const catPicSchema = {
  url: String,
  catAscii: String,
  uploadedAt: { type: Date, default: Date().now }
};

let Pic;

try {
  Pic = mongoose.model("pic");
} catch {
  Pic = mongoose.model("pic", catPicSchema);
}

export default async (req, res) => {
  const pics = await Pic.find({}).select('url uploadedAt _id');
  mongoose.connection.close();
  res.status(200).json(pics);
}
