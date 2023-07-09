const mongoose = require('mongoose');

const mongo_uri = process.env.MONGODB_URI;

mongoose.connect(mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'bbdatav1'
  }
);

const dataSchema = {
  name: String,
  homeFreeThrows: Number,
  homeTime: Number,
  awayFreeThrows: Number,
  awayTime: Number,
  homeFreeThrowsBubble: Number,
  homeBubbleTime: Number,
  awayFreeThrowsBubble: Number,
  awayBubbleTime: Number,
}
let PlayerData;

try {
  PlayerData = mongoose.model("playerData");
} catch {
  PlayerData = mongoose.model("playerData", dataSchema);
}


export default async (req, res) => {
  const pd = await PlayerData.find({}).sort({ totalTime: -1 }).limit(50);
  mongoose.connection.close();
  res.status(200).json(pd);
}
