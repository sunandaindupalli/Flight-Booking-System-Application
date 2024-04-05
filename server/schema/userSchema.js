import mongoose from "mongoose";

const users = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is a required field"]
    },
    password: {
        type: String,
        required: [true, "Password is a required field"]
    }
})

const User = mongoose.model('Users', users)

export default User;