const mongoose = require('mongoose')
const { Schema } = mongoose

const productschema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, required: true },
    rating: { type: Number, min: [1, 'Not Less Than 1'], max: [5, 'not greater than 5'], default: 1 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail:{type:String},
    discountPercentage:{type:String, required:true}
})

exports.Product = mongoose.model('Product', productschema)