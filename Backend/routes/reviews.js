const express = require('express')
const router = express.Router();
const {
    createReview,
    deleteReview
} = require('../controllers/reviews')


// :id is id of destination on which we need to add review
router.post('/:id', createReview)

router.delete('/:id/:reviewId', deleteReview)


module.exports = router