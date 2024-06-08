import mongoose, { Schema } from "mongoose";



const PaymentSchema  = new mongoose.Schema({
    
    TaxeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Taxes',
        required: true
    },
    Paymentamount:{
        type: Number,
        required:true,

    },
    dueDate: {
        type: Date,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'Due', 'Overdue'],
        default: 'Due'
    }
   
   
    },
    { timestamps: true }
)

const Payments = mongoose.model('Payments', PaymentSchema)
export default Payments