import mongoose from 'mongoose'

const flightSchema = mongoose.Schema({
    image: String,
    flightId: String,
    flightName: {
        type: String,
        required: [true, "Please Enter your Flight Name"]
    },
    departureTime: {
        type: Date,
        required: [true, "Departure time required"]
    },
    arrivalTime: {
        type: Date,
        required: [true, "Arrival time required"]
    },
    stops: {
        type: Number,
        required: [true, "Stops is a required field"]
    },
    avgTime: String,
    departureLoc: {
        type: String,
        required: [true, "Please Enter your departureLoc"]
    },
    arrivalLoc: {
        type: String,
        required: [true, "arrivalLoc is a required field"]
    },
    departureAirportName: {
        type: String,
        required: [true, "departureAirportName is a required field"]
    },
    arrivalAirportName: {
        type: Number,
        required: [true, "arrivalAirportName is a required field"]
    },
    price: {
        type: String,
        required: [true, "price is a required field"]
    },
})

const Flights = mongoose.model('Flights',flightSchema);
export default Flights;