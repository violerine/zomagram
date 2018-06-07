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
    static showOne(req,res){
        // console.log(req.body.username,'username')
        Model.findOne({username: req.params.username})
        .then(dataFood=>{
            res.status(200).json({
                message: 'Menampilkan 1',
                dataFood
            })
        })
        .catch(err=>{
            res.status(400).json({
                message: err.message
            })
        })
    }
    static upload(req,res){
        console.log(req.file)
        let data = {
            name: req.body.name,
            desc: req.body.desc,
            location: req.body.location,
            url : req.file.cloudStoragePublicUrl,
            username: req.body.username
        }
        let newUpload = new Model(data)
        newUpload.save()
        .then(dataFood=>{
            res.status(200).json({
                message: 'data berhasil masuk',
                dataFood
            })
        })
    }
    static delete(req,res){
        Model.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.status(200).json({
                message: 'deleted photo'
            })
        })
    }
}

module.exports = Controller