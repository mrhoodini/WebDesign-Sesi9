import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Running Shoes', price: 79.99 },
    { id: 2, name: 'Casual Sneakers', price: 59.99 },
    { id: 3, name: 'High Heels', price: 89.99 },
    { id: 4, name: 'Black Snickers', price: 109.99 },
    { id: 5, name: 'White Sneakers', price: 69.99 },
  ];

  return (
    <section>
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
