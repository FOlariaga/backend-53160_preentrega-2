import productsModel from "./models/products.model.js";
class ProductManager {

    async get({limit, page, query}) {

        const products = await productsModel.paginate(query, { page: page, limit: limit , lean : true})
        return products
    }

    async getById(idProduct) { 
        const product = await productsModel.find({_id : idProduct}).lean()
        console.log(product);
        return product
    }

    async add(data) {
        await productsModel.create(data)
    }


    async update(filter, update, options) {
     const process = await productsModel.findOneAndUpdate(filter, update, options);
     console.log(process);
     return process
    }

    async delete(idProduct) {
        try {
            const process = await productsModel.findOneAndDelete(idProduct);
            console.log(process);
        } catch (error) {
            
        }
        
    }
}

export default ProductManager