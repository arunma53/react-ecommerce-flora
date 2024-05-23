import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://3000-arunma53-ecommercebloom-j1qgq3cmr10.ws-us114.gitpod.io/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img src={product.image_url} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.cost}</p>
                <a href={`/cart/${product.id}/add`} className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
