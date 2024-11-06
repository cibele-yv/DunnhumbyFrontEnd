import React from 'react';
import { render } from '@testing-library/react';
import DataGraph from '../../src/components/DataGraph';

describe('DataGraph', () => {
  it('renders without crashing', () => {
    const sampleData = [{ category: 'Grocery', stockQuantity: 5 }];
    const { container } = render(<DataGraph data={sampleData} />);
    expect(container).toBeInTheDocument();
  });
});
