import { productRepository } from '../../infrastructure/repositories/product.repository'

export const productService = {
  getProducts: () => {
    return productRepository.getProducts()
  },
  getProductById: (productId:string) => {
    return productRepository.getProductById(productId)
  }
}