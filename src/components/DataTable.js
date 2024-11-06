import React, { useState } from 'react';

const DataTable = ({ products = [] }) => {
  const [filter, setFilter] = useState("");
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.code.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by Product Code or Name" 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
      />
      {filteredProducts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.stockQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
      <canvas data-testid="data-table" />
    </div>
  );
};

export default DataTable;
