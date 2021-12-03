const Review = require('../models/review')
const Destination = require('../models/destination')
const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/not-found')

const createReview = async(req, res) => {

    const destination = await Destination.findById(req.params.id).populate('reviews', 'rating');

    if (!destination) throw new NotFoundError('Some error occured while adding the review');

    const { body, rating } = req.body;
    const review = new Review({
        body,
        rating
    })

    // review.author = req.user._id

    destination.reviews.push(review);

    let avgRating = 0;

    destination.reviews.forEach(rev => (avgRating += rev.rating))

    avgRating = (avgRating / destination.reviews.length);
    avgRating = avgRating.toFixed(1);

    destination.avgRating = avgRating;

    await review.save();
    await destination.save();

    res.status(StatusCodes.OK).json({ review, destination });
}

const deleteReview = async(req, res) => {

    const { id, reviewId } = req.params

    const destination = await Destination.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }, { new: true }).populate('reviews', 'rating');
    let avgRating = 0;

    destination.reviews.forEach(rev => (avgRating += rev.rating))

    avgRating = (avgRating / destination.reviews.length);
    avgRating = avgRating.toFixed(1);

    destination.avgRating = avgRating;

    await destination.save();
    const deletedReview = await Review.findByIdAndDelete(reviewId)

    res.status(StatusCodes.OK).json({ msg: 'review deleted', deletedReview, updatedDestination: destination })
}

module.exports = {
    createReview,
    deleteReview
}