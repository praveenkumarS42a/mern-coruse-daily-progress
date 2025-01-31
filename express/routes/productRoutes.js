

ProductRoutes.route("/")
.get(getProducts)
.post(createProduct)

ProductRoutes.route("/:id")
.get(getProductById)
.delete(deleteProduct)
.patch(updateProduct)
.put(updateProduct);

module.exports=productRoutes;