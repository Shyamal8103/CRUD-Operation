
const model = require('../model/product')
const mongoose = require('mongoose')
const Product = model.Product







exports.getAllProducts = async (req, res) => {
    try {

        const products = await Product.find()
        res.json(products)
    }
    catch (err) {
        console.log(err)
        res.json(err)
    }
}

exports.getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        res.json(product)
    }
    catch (err) {
        console.log(err)

    }

}

exports.CreateProduct = async (req, res) => {

    console.log(req.body)
    const product = new Product(req.body)
    const saveproduct= await product.save().then((ans)=>{
        console.log(ans)
        res.send(ans)
        
    }).catch((err)=>{
        console.log(err)
    })
     


}

exports.ReplaceProduct = async (req, res) => {
    const id = req.params.id
    try {
        const docs = await Product.findOneAndUpdate({ _id: id }, req.body)
        res.json(docs)
        console.log(docs)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }

}
exports.UpdateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json(doc)
    }
    catch (err) {
        console.log(err)
        res.json(err)
    }
}

exports.DeleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndDelete({ _id: id })
        res.json(doc)
    }
    catch (err) {
        console.log(err)
        res.json(err)
    }
}

