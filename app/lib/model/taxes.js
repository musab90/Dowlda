import mongoose, { Schema } from "mongoose";



const TaxesSchema  = new mongoose.Schema({
    
    Vowner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    taxYear:{
        type: Date,
        required:true
    }, 
    amount:{
        type: Number,
        default: 109
    }
    },
    { timestamps: true }
)

const Taxes = mongoose.model('Taxes', TaxesSchema)
export default Taxes