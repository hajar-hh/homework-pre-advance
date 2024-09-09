const { Router } = require("express");

const {
  getAllProduct,
  getAllProductById,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/blogs.controller");

const router = Router();

/**
 * @URL : /product/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all product
 */
router.get("/", getAllProduct);

/**
 * @URL : /product/:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all product by id
 */
router.get("/:id", getAllProductById);

/**
 * @URL : /product/
 * @Method : POST
 * @Status : PUBLIC
 * @Description : post new product
 */
router.post("/", postProduct);

/**
 * @URL : /product/:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : update product
 */
router.patch("/:id", updateProduct);

/**
 * @URL : /product/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : remove product
 */
router.delete("/:id", deleteProduct);

module.exports = router;
