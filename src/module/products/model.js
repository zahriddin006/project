import { fetchData } from '../../utils/postgress.js'

const USERS = `
  SELECT * FROM users
`
const PRODUCTS = `
  SELECT * FROM products
`
const DELETE_PRODUCT = `
  DELETE FROM products WHERE products_id = $1 RETURNING *
`
const NEW_PODUCT = `
INSERT INTO products(product_name,product_catagories, product_price,product_available, product_image) VALUES($1, $2, $3 , $4, $5) RETURNING *
`

export const products = () => fetchData(PRODUCTS);
export const users = () => fetchData(USERS);
export const deleteProducts = id => fetchData(DELETE_PRODUCT, id)
export const createProduct =(product_name,product_catagories, product_price,product_available, product_image) => fetchData(NEW_PODUCT,product_name,product_catagories, product_price,product_available, product_image);