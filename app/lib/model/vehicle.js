import mongoose from "mongoose";



const VehicleSchema  = new mongoose.Schema({
    
    Vname: {
        type: String,
        required: true,
        min: 8,
        max: 18,
    },
    Vmodel: {
        type: String,
        required: true
        
    },
    Vtr: {
        type: String,
        required: true,
        unique: true
    },
    Vownerimg: {
        type: String,
        
    },
    Vowner: {
        type: String,
        required: true,
    },
    Vmg: {
        type: String,
       
    },
   
    phone: {
        type: String,
        
    },
    address: {
        type: String,
    },
    VType:{
        type: [String],
        default: ['bajaj', 'car']
    }
    },
    { timestamps: true }
)

export const Vehicle = mongoose.models.Vehicles || mongoose.model("Vehicles", VehicleSchema);