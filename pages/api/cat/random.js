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
  const agent = ua.useUserAgent(req.headers['user-agent']);

  const pics = await Pic.find({});
  const pic = pics[Math.floor((Math.random()) * pics.length)];
  

  if (agent.browser && agent.browser !== undefined) {
    console.log('sending random cat to browser');
    const cat = ansi_up.ansi_to_html(pic.catAscii + '\n')

    res.status(200).send(`<body style="font-family: monospace; background-color: #222222;">${cat}</body>`);
  } else {
    console.log('sending random cat to terminal');

    res.status(200).send(pic.catAscii + '\n');
  }

  mongoose.connection.close();
}
