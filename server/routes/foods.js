const express = require('express')
const router = express.Router()
const controller = require('../controller/food-controllers')
const images = require('../helper/images')

router.get('/',controller.showAll)
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

module.exports = router