let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

const getAllProduct = (req, res) => {
  res.status(200).send(products);
};

// ========********=========

const getAllProductById = (req, res) => {
  const filterProduct = products.filter((pr) => pr.id == req.params.id);

  if (filterProduct.length > 0) {
    res.status(200).send(filterProduct);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

// ========********=========

const postProduct = (req, res) => {
  const newPro = req.body;
  products.push(newPro);
  if (newPro) {
    res.status(200).send(newPro);
  } else {
    res.status(404).send({ message: "the product was not added succesfully" });
  }
};

// ========********=========

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const findId = products.find((pro) => pro.id === parseInt(id));

  if(!findId){
    res.status(404).send('product not found')
  }
  if (name) findId.name = name; 
  if (price) findId.price = price; 

  
  res.json({
    id: findId.id,
    name: findId.name,
    price: findId.price,
    message: 'Product updated successfully',
  });
};

// ========********=========

const deleteProduct = (req,res)=>{
  const id = parseInt(req.params.id); 
  const findIndex = products.findIndex((pro) => pro.id === id); 
  if (findIndex === -1) {
    return res.status(404).send({ message: 'Product not found' });
  }
  products.splice(findIndex, 1); 
  res.status(200).send({ message: 'Product deleted successfully' }).end();
}
// ========********=========

module.exports = {
  getAllProduct,
  getAllProductById,
  postProduct,
  updateProduct,
  deleteProduct
};
