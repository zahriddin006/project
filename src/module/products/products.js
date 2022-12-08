import { products, users , deleteProducts, createProduct} from "./model.js";

export default {
  GET_USERS:async (_, res)=>{

    const AllUsers = await users();

    res.json(AllUsers)
  },
  GET_PRODUCTS:async (_, res)=>{

    const AllProducts = await products();

    res.json(AllProducts)
  }, 
  POST_NEWPRODUCT:async (req,res,next)=> {
    const {product_name,product_catagories, product_price,product_available, product_image} = req.filtered
    
    const newProduct = await createProduct(product_name,product_catagories, product_price,product_available, product_image)

    if (newProduct && newProduct.length) {
      res.json({
        message: "created product",
        status: 200,
        data: newProduct
      })
    }
  },

  DEL_PRODUCT:async (req,res)=>{
    const {id} =  req.params

    const deleteProduct = await deleteProducts(id)

    if (deleteProduct && deleteProduct.length) {
      res.json({
        message: "deleted product",
        status: 200,
        data: deleteProduct
      })
    }
  },
}