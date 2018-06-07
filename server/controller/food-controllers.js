const Model = require('../models/food-model')
const images = require('../helper/images')

class Controller {
    static showAll(req,res){
        // res.send('halaman utama')
        Model.find()
        .then(foods=>{
            res.status(200).json({
                message : "menampilkan semua makanan",
                foods
            })
        })
        .catch(err=>{
            res.status(400).json({
                message: err.message
            })
        })
    }
    static post(req,res){
        let data = {
            name: req.body.name,
            desc: req.body.desc,
            location: req.body.location,
        }
        let newUpload = new Model(data)
        images.multer.single('file'),
        images.sendUploadToGCS,
        (req,res)=>{
            newUpload.url = req.body
        }
    }
}

module.exports = Controller