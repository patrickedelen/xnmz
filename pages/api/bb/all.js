const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://root:NXYzvb6f1Px4ME0s@cluster0.3gdd7.mongodb.net/bbdatav1?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
  res.status(200).json(pd);
}
