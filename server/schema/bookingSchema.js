import mongoose from 'mongoose'

const bookingSchema = mongoose.Schema({

})

const Bookings = mongoose.model('Bookings',bookingSchema)

export default Bookings