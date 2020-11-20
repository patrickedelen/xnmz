const mongoose = require('mongoose');
const ua = require('next-useragent');
const AU = require('ansi_up');

const ansi_up = new AU.default;


mongoose.connect('mongodb+srv://root:NXYzvb6f1Px4ME0s@cluster0.3gdd7.mongodb.net/ver1?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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