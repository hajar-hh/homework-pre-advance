// src/data.js
const products = [
    { "type": "plants", "name": "Boncellensis Secullant", "star": 3, "price": "34.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg" },
    { "type": "cactus", "name": "cleistocactus", "star": 2, "price": "28.00", "offPrice": "25.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg" },
    { "type": "plants", "name": "Water Lily", "star": 4, "price": "54.50", "offPrice": "34.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg" },
    { "type": "plants", "name": "money plant", "star": 5, "price": "23.00", "offPrice": "20.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg" },
    { "type": "plants", "name": "old lady cactus", "star": 3, "price": "15.00", "offPrice": "12.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg" },
    { "type": "plants", "name": "Piorro Quisquam", "star": 3, "price": "32.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg" },
    { "type": "plants", "name": "snake tail rattle", "star": 1, "price": "45.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg" },
    { "type": "cactus", "name": "Star Cactus", "star": 2, "price": "34.00", "offPrice": "32.00", "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg" }
  ];
  
  export const addModalMessage = (setModalMessages, message) => {
    setModalMessages((prevMessages) => [...prevMessages, message]);
    
    setTimeout(() => {
      setModalMessages((prevMessages) => prevMessages.slice(1)); 
    }, 2000);
  };
  
  export default products; 
  