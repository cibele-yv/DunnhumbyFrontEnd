import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/pages/Dashboard';

describe('Dashboard', () => {
  const sampleProducts = [
    { id: 1, category: 'Grocery', name: 'Apple', code: '001', stockQuantity: 10 },
    { id: 2, category: 'Grocery', name: 'Banana', code: '002', stockQuantity: 20 },
  ];

  it('renders DataGraph and DataTable when products are available', () => {
    render(<Dashboard products={sampleProducts} />);

    expect(screen.getByTestId('data-graph')).toBeInTheDocument();

    expect(screen.getByTestId('data-table')).toBeInTheDocument();
  });
});

