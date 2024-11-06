import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/ProductService';
import DataTable from '../components/DataTable';
import DataGraph from '../components/DataGraph';

const Dashboard = () => {
  const [products, setProducts] = useState([]);  // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Dashboard</h2>
      <DataTable products={products} />
      <DataGraph products={products} />
    </div>
  );
};

export default Dashboard;
