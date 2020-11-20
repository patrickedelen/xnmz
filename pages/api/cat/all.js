const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://root:NXYzvb6f1Px4ME0s@cluster0.3gdd7.mongodb.net/cat?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
  const pics = await Pic.find({});
  res.status(200).json(pics);
}
