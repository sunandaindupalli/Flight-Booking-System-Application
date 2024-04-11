import mongoose from 'mongoose'

const locationSchema = mongoose.Schema({
    locationId: Number,
    locationName: {
        type: String,
        required: [true, "Location Name is a required field"]
    },
    locImage: {
        type: String,
        required: [true, "locImage is a required field"]
    },
})

const Locations = mongoose.model('Locations',locationSchema)
export default Locations;