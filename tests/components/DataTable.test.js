import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from '../../src/components/DataTable';

describe('DataTable', () => {
  const sampleProducts = [
    { id: 1, category: 'Grocery', name: 'Apple', code: '001', stockQuantity: 10 },
    { id: 2, category: 'Grocery', name: 'Banana', code: '002', stockQuantity: 20 },
  ];

  it('renders the correct number of rows', () => {
    render(<DataTable products={sampleProducts} />); // Passes `products` prop correctly
    
    const rows = screen.getAllByRole('row'); 
    expect(rows.length).toBe(sampleProducts.length + 1); // +1 for the header row
  });
});
