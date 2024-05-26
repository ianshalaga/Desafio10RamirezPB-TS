import DbProduct from "../interfaces/DbProduct";
import mocking from "../classes/Mocking";

export default class MockingService {
  constructor() {}

  async mockingProducts(quantity: number) {
    try {
      const fakeProducts: DbProduct[] = [];
      for (let i = 0; i < quantity; i++) {
        const dbProduct: DbProduct = await mocking.mockingProduct();
        fakeProducts.push(dbProduct);
      }
      return fakeProducts;
    } catch (error) {
      throw error;
    }
  }
}
