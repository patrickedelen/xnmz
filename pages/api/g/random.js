const mongoose = require('mongoose');
const ua = require('next-useragent');
const AU = require('ansi_up');

const ansi_up = new AU.default;

const mongo_uri = process.env.MONGODB_URI;

mongoose.connect(mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'ver1'
  }
);

const videoSchema = {
  title: String,
  url: String,
};

let Video;

try {
  Video = mongoose.model("video");
} catch {
  Video = mongoose.model("video", videoSchema);
}

export default async (req, res) => {

  const size = await Video.countDocuments();
  const offset = Math.floor(Math.random() * size);

  const video = await Video.findOne().skip(offset);

  res.status(200).send({ title: video.title, url: video.url });
}