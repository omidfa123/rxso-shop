import multer from 'multer';
import streamifier from 'streamifier';
const cloudinary = require('cloudinary').v2;

let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: any, res: any) {
  upload.single('image')(req, res, async err => {
    streamifier.createReadStream(req.file.buffer).pipe(
      cloudinary.uploader.upload_stream(
        {
          folder: req.body.folder,
          resource_type: req.body.type || 'auto',
          public_id: req.body.public_id,
        },
        function (error: any, result: any) {
          if (error) res.status(500).send(error);
          res.status(200).send(result);
          res.end();
        }
      )
    );
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
