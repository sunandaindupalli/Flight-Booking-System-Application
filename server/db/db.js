import mongoose from "mongoose";


const db = ()=>{mongoose.connect('mongodb+srv://Sunanda:sunanda1234@flightbookingapplicatio.rpw416c.mongodb.net/?retryWrites=true&w=majority&appName=flightBookingApplication')
.then(console.log('DB Connected'))}

export default db