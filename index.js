require('dotenv').config()
const express = require('express')
const cors=require('cors')
const app = express()
const mongoose = require('mongoose')
const productsController = require('./Controller/Product')
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
main().catch(err=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    console.log('Server started')
}


app.get('/products',productsController.getAllProducts)
app.get('/product/:id',productsController.getProduct)
app.post('/product',productsController.CreateProduct)
app.put('/product/:id',productsController.ReplaceProduct)
app.patch('/product/:id',productsController.UpdateProduct)
app.delete('/product/:id',productsController.DeleteProduct)

app.listen(process.env.PORT,()=>{
    console.log(`app is listen in port 8000`)
})

// console.log('hello')