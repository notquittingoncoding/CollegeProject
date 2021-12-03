const express = require('express')
const router = express.Router();

const {
    getAllDestinations,
    createNewDestination,
    getDestination,
    deleteDestination,
    updateDestination
} = require('../controllers/destinations')

const multer = require('multer');
const { storage } = require('../cloudinary/index')
const upload = multer({ storage });

router.route('/')
    .get(getAllDestinations)
    .post(upload.array('image'), createNewDestination);

router.route('/:id')
    .get(getDestination)
    .delete(deleteDestination)
    .patch(updateDestination)


module.exports = router