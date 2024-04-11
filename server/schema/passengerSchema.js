import mongoose from "mongoose";

const passengerSchema = mongoose.Schema({
    passengerId: String,
    firstName: {
        type: String,
        required: [true, "Please Enter your First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Please Enter your Last Name"]
    },
    mobile: {
        type: Number,
        required: [true, "Mobile is a required field"]
    },
    email: {
        type: String,
        required: [true, "Email is a required field"]
    },
    password: {
        type: String,
        required: [true, "Password is a required field"]
    },
})

const Passengers = mongoose.model('Passengers', passengerSchema)

export default Passengers