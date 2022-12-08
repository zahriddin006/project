import { Router } from "express";
import validation from "../../middleware/validation.js"
import { ProductCreated } from "../../validation/login.validation.js";
import products from "./products.js";
const productsRoutes = Router();

export default productsRoutes
.get('/products', products.GET_PRODUCTS)
.get('/users', products.GET_USERS)
.post('/newProduct', validation(ProductCreated) , products.POST_NEWPRODUCT)
.delete('/delete/:id', products.DEL_PRODUCT)