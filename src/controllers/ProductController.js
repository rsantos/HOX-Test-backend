const Product = require('../models/Product')

module.exports = {
    async index(request, response){

        const { page=0 } = request.query

        try{
            const products = await Product.find().limit(10).skip(10*page)

            if(products.length < 1 ){
                return response.status(400).send({ error: 'There are no products registered'})
            }

            return response.json(products)
        } catch (err){
            return response.status(400).send({ error: 'Products not found'})
        }
    },

    async store(request, response){

        const { name, manufacturingDate, perishableProduct, expirationDate, price } = request.body

        try{

            if(perishableProduct){
                const product = await Product.create({
                    name,
                    manufacturingDate,
                    perishableProduct,
                    expirationDate,
                    price
                })
                return response.json(product);
            } else{
                const product = await Product.create({
                    name,
                    manufacturingDate,
                    perishableProduct,
                    expirationDate: null,
                    price
                })

                return response.json(product);
            }

        } catch (err) {
            return response.status(400).send({ error: 'Product registration failed'})
        }
    },

    async update(request, response){ 
        const { productId, name, manufacturingDate, perishableProduct, expirationDate, price } = request.body

        try{

            if(perishableProduct){
                await Product.findByIdAndUpdate({ _id: productId } ,
                    {"name": name, manufacturingDate, perishableProduct, expirationDate,price} ,function (err) {
                    if(err) console.log(err)
                })
            } else {
                await Product.findByIdAndUpdate({ _id: productId } ,
                    {"name": name, manufacturingDate, perishableProduct, "expirationDate": null ,price} ,function (err) {
                    if(err) console.log(err)
                })
            }
            
            

            return response.json({massage: "updated"});

        } catch (err) {
            return response.status(400).send({ error: 'Update failed'})
        }
    },

    async delete(request, response){

        const { productId } = request.body

        const products = await Product.findById({_id: productId } , function (err) {
            if(err) console.log(err)
        })

        if(!products)
            return response.send({ message: "Not founded"})

        await Product.deleteOne({ _id: productId }, function (err) {
            if(err) console.log(err)
        })

        return response.send({ products, message: "Successfully deleted"})

    }

}