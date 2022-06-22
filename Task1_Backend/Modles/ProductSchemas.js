
const mongoose = require('mongoose');

const  productSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    productType:{
        type: String,
        required: true
    },
    productCategory:{
        type: String,
        required: true,
    },
    productPrice:{
        type: Number,
        required: true,
    },
     cpu: String,
     ram: String,
     processor: String,
     ratings:{
        type:Number,
        default:0
     },

     brand: String,
     author: String,
     size: String,
     publisher: String,
     warranty:String,
     gender:String,
     sellerId:{
        type: Number,
        required: true
     }




},
{timestamps: true});    //timestamps keep check on created and updated time of products

const product = new mongoose.model('product', productSchema);
module.exports = product;