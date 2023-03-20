import { ProductsActionType, productsStore } from './../Redux/ProductsState';
import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/config";
import CategoryModel from '../Models/CategoryModel';

//REST API Methods: --->
//GET      Get data from server
//POST     Add new data to servers
//PUT      Update full data in server -- Sending all properties 
//PATCH    Update partial data in server-- Sending some properties 
//DELETE   Delete data in server

class ProductsService {

    //Get all products
    public async getAllProducts(): Promise<ProductModel[]> {

        //Take products from global store
        let products = productsStore.getState().products;

        //If we don't have that products in global state:
        if (products.length === 0) {

            // AJAX async Request
            const response = await axios.get<ProductModel[]>(appConfig.productsUrl); //AJAX

            //Extract products;
            products = response.data;

            //Save products to global state
            productsStore.dispatch({ type: ProductsActionType.FetchProducts, payload: products })
        }


        //Return products
        return products;
    }

    //Get one product
    public async getOneProduct(id: number): Promise<ProductModel> {

        //Take products from global store
        let products = productsStore.getState().products;

        //Find required product:
        let product = products.find(p => p.id === id);

        //If we don't have that product in global state:
        if (!product) {
            // AJAX async Request
            const response = await axios.get<ProductModel>(appConfig.productsUrl + id);

            //Extract one product;
            product = response.data;
        }

        //Return one product
        return product;
    }


    // Add product: 
    public async addProduct(product: ProductModel): Promise<void> {

        // AJAX Request - Sending a new product to add, receiving back the added product - after adding to the database:

        // const response = await axios.post<ProductModel>(appConfig.productsUrl, product); // Sending object without files.

        const myFormData = new FormData(); // Can contain strings and / or files.
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image[0]); // image = FileList, image[0] = File

        // Sending object with file (the image):
        const response = await axios.post<ProductModel>(appConfig.productsUrl, myFormData); // Sending object without files.

        // Extract the added product: 
        const addedProduct = response.data;

        //Add the added product to the global state:
        productsStore.dispatch({ type: ProductsActionType.AddProduct, payload: addedProduct })

    }

    // Update product: 
    public async updateProduct(product: ProductModel): Promise<void> {

        // AJAX Request - Sending a new product to add, receiving back the added product - after adding to the database:

        // const response = await axios.post<ProductModel>(appConfig.productsUrl, product); // Sending object without files.

        const myFormData = new FormData(); // Can contain strings and / or files.
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image[0]); // image = FileList, image[0] = File

        // Sending object with file (the image):
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, myFormData); // Sending object without files.

        // Extract the added product: 
        const updatedProduct = response.data;

        //Update that product in the global state:
        productsStore.dispatch({ type: ProductsActionType.UpdateProduct, payload: updatedProduct });
    }

    // Delete product: 
    public async deleteProduct(id: number): Promise<void> {

        //Delete in backend:
        await axios.delete<void>(appConfig.productsUrl + id);

        //Delete that product in the global state:
        productsStore.dispatch({ type: ProductsActionType.DeleteProduct, payload: id });
    }

    //Get all categories:
    public async getAllCategories(): Promise<CategoryModel[]> {
        //Send JWT header in specific request (NOT a good practice)
        // const headers = { authorization: "Bearer " + authStore.getState().token }
        // const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl, { headers });

        const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);
        const categories = response.data;
        return categories;
    }
}

const productsService = new ProductsService();

export default productsService;