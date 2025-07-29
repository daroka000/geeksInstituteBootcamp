const products = [
    { name: "phone", price: "200", category: "tech" },
    { name: "laptop", price: "1000", category: "tech" },
    { name: "book", price: "15", category: "education" }
  ];
  
  function search(item) {
    const found = products.find(p => p.name.toLowerCase() === item.toLowerCase());
  
    if (found) {
      console.log(`${item} existe :`);
      console.log(`- ${found.name} | ${found.category} | $${found.price}`);
    } else {
      console.log(`${item} n'existe pas.`);
    }
  }
  
  module.exports = { products, search };
  