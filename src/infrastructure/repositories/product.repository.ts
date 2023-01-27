import { http } from "../http/http";
import { ProductDTO } from "../dto/ProductDTO";
import { DetailProduct, Product } from "../../domain/models/Product";

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>(
      "http://localhost:3000/products"
    );

    return products.map(
      (productDto): Product => ({
        id: productDto.id,
        name: productDto.name,
        code: productDto.code,
        price: productDto.price,
        fees: productDto.fees,
        discount: productDto.discount,
        picture: productDto.pictures[0],
      })
    );
  },
  getProductById: async (productId: string) => {
    const products = await http.get<ProductDTO[]>(
      "http://localhost:3000/products"
    );

    return products.find((productDto): DetailProduct | undefined => {
      if (productDto.id === productId)
        return {
          id: productDto.id,
          name: productDto.name,
          code: productDto.code,
          price: productDto.price,
          fees: productDto.fees,
          discount: productDto.discount,
          pictures: productDto.pictures,
        };
    });
    
  },
};
