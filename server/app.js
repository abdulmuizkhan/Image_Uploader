const expressclass = require('express')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const cors = require('cors')

const app = expressclass()
const port = 5000;

cloudinary.config({
    cloud_name: 'dz38ybilw',
    api_key: '156288292461638',
    api_secret: 'wA5LmYk4TWk8pM1EBl7_Pihz1fc'
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    allowedFormats: ['jpg', 'png'],
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadCloud = multer({ storage: storage });

const f_path = "C:\Users\\91976\\Downloads\\IMG-20230116-WA0002.jpg";

app.use(expressclass.static('public'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.post('/upload', uploadCloud.single('file'), async(req, res, next) => {
    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({ secure_url: req.file.path });
});

// const uploadImageToCloudinary = async(filePath) => {
//     try {
//         const result = await cloudinary.uploader.upload(filePath, {
//             folder: 'my-images/', // Optional: Specify a folder in your Cloudinary account
//         });
//         console.log('Image uploaded to Cloudinary:', result);
//         return result.url; // Return the public URL of the uploaded image
//     } catch (error) {
//         console.error('Error uploading image:', error);
//     }
// };

// const imageUrl = uploadImageToCloudinary(f_path);
// console.log('Image URL:', imageUrl);


app.get('/', (req, resp) => {
    resp.send('Hello')
})



app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})