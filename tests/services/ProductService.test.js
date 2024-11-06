import { getProducts } from '../../src/services/ProductService';

describe('ProductService', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: 'Apple', category: 'Fruits', stockQuantity: 10 }]),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches products successfully from an API', async () => {
    const products = await getProducts();
    expect(products).toEqual([{ id: 1, name: 'Apple', category: 'Fruits', stockQuantity: 10 }]);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://localhost:32773/Products");
  });

  it('handles fetch error', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('')));
    
    await expect(getProducts()).rejects.toThrow();
  });
});
