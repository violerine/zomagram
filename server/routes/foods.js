const express = require('express')
const router = express.Router()
const controller = require('../controllers/food-controllers')
const images = require('../helper/images')

router.get('/',controller.showAll)
router.get('/:username',controller.showOne)

router.post('/upload',
images.multer.single('image'), 
images.sendUploadToGCS,
controller.upload)

router.delete('/delete/:id',controller.delete)
module.exports = router