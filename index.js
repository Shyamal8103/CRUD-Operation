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
    const username = encodeURIComponent('shivakumarsk5308')
    const password = encodeURIComponent('Shyamal@7155');
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.hwkswaj.mongodb.net/ecommerceDatabase?retryWrites=true&w=majority`)

    // await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log('Server started')
}

//  
// 'mongodb+srv://shivakumarsk5308:<password>@cluster0.hwkswaj.mongodb.net/?retryWrites=true&w=majority'

app.get('/products',productsController.getAllProducts)
app.get('/product/:id',productsController.getProduct)
app.post('/product',productsController.CreateProduct)
app.put('/product/:id',productsController.ReplaceProduct)
app.patch('/product/:id',productsController.UpdateProduct)
app.delete('/product/:id',productsController.DeleteProduct)

app.listen(process.env.PORT,()=>{
    console.log(`app is listen in port ${process.env.PORT}`)
})

// console.log('hello')