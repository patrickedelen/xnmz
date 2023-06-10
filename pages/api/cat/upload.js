const mongoose = require('mongoose');
const aws = require('aws-sdk');
// import { File } from 'formidable';
import Formidable from 'formidable-serverless';
import fs from 'fs';

const asciify = require('asciify-image');

mongoose.connect('<db string>',
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

export const config = {
  api: {
    bodyParser: false
  }
};

export default (req, res) => {
  console.log('got request to upload api');

  const options = {
    fit:    'box',
    width:  50,
    height: 50,
  };
  const form = new Formidable.IncomingForm({
    keepExtensions: true,
  });

  aws.config.update({
    accessKeyId: 'AKIA3KDYAGJFIDJENN53',
    secretAccessKey: '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',
    region: 'us-west-1',
    signatureVersion: 'v4',
  });

  const s3 = new aws.S3({ params: { Bucket: 'patrickedelen-catpics' }});
  const p = new Pic();

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject()
      }
      console.log('finished parsing form')
      console.log(files.photo.path);

      const data = {
        Key: p._id.toString(),
        Body: fs.readFileSync(files.photo.path),
      };
      s3.upload(data, async (err, obj) => {
        if (err) {
          console.log(err);
        } else {
          console.log(obj);
          p.url = obj.Location;
          asciify(files.photo.path, options)
            .then(async (a) => {
              console.log(a);
              p.catAscii = a;
              await p.save();
              resolve(res.status(200).json({ msg: 'ok' }));
            })
          .catch((e) => console.log(e)); 
        }
      })

    });

  });
}
