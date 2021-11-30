const ProductService = require('../product_service_no_di.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });
});

// jest.mock('../product_client');

// describe('ProductService', () => {
//   const fetchItems = jest.fn(async () => [
//     { item: '🥛', available: true },
//     { item: '🍌', available: false },
//   ]);

//   ProductClient.mockImplementation(() => ({ fetchItems }));

//   let productService;

//   beforeEach(() => {
//     productService = new ProductService();
//   });

//   it('should filter out only available items', async () => {
//     const items = await productService.fetchAvailableItems();
//     expect(items.length).toBe(1);
//     expect(items).toEqual([{ item: '🥛', available: true }]);
//   });
// });
