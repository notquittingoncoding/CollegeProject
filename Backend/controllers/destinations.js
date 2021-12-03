const Destination = require('../models/destination')
const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/not-found')
const cloudinary = require('cloudinary').v2


//GET ALL DESTINATIONS
const getAllDestinations = async(req, res) => {

    const { name, sort, numericFilters } = req.query

    let queryObj = {}

    if (name) {
        queryObj.title = { $regex: name, $options: 'i' } //searching for Destinations where name is anywhere between the actual name field of mongodb obj and we set options as i so that we can check irrespective of lower or upper case
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        //let numericFilters = price>10,rating>=4
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );

        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObj[field] = {
                    [operator]: Number(value)
                };
            }
        });
    }

    // console.log(queryObj)

    // adding sort functionality

    let results = Destination.find(queryObj)
    if (sort) {
        const sortlist = sort.split(',').join(' ');
        results = results.sort(sortlist); // for example, sort = 'name, price' sortlist = 'name price' because sort() takes parameters separated with space
    } else {
        results = results.sort('createdAt')
    }

    //limiting the number of results using limit and skip functions 
    //this can also help with pagination

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 9

    const skip = (page - 1) * limit;

    const destinations = await results.skip(skip).limit(limit)

    res.status(StatusCodes.OK).json({ destinations, nbHits: destinations.length })
}



//CREATE NEW DESTINATION
//to be completed
const createNewDestination = async(req, res) => {
    const { title, city, price, description } = req.body;
    const destination = new Destination({
        title,
        city,
        price: Number(price),
        description
    });

    if (req.files) {
        destination.images = req.files.map(f => ({ url: f.path, filename: f.filename }))
    }

    // destination.author = req.user
    await destination.save();
    res.status(StatusCodes.OK).json({ newDestination: destination, msg: 'successfully created a new destination' })
}


//GET ONE DESTINATION
const getDestination = async(req, res) => {
    const { id: DestinationId } = req.params
    const destination = await Destination.findById({ _id: DestinationId });

    if (!destination) throw new NotFoundError('No destinations found with given destination id');

    res.status(StatusCodes.OK).json({ destination })

}


//UPDATE DESTINATION
//to be completed
const updateDestination = async(req, res) => {
    res.send('update destination');
}


//DELETE DESTINATION
const deleteDestination = async(req, res) => {
    const { id: DestinationId } = req.params
    const destination = await Destination.findById({ _id: DestinationId });

    if (!destination) {
        throw new NotFoundError('Destination to be deleted could not be found');
    }

    for (let img of destination.images) {
        await cloudinary.uploader.destroy(img.filename);
    }

    await Destination.findByIdAndDelete({ _id: DestinationId })

    res.status(StatusCodes.OK).json({ deletedDestination: destination });
}




module.exports = {
    getAllDestinations,
    createNewDestination,
    getDestination,
    updateDestination,
    deleteDestination
}