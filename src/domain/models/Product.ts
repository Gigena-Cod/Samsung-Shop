export type Product = {
  id: string;
  name: string;
  code: string;
  price: number;
  fees: number;
  discount: number;
  picture: string;
};
export type DetailProduct = {
  id: string;
  name: string;
  code: string;
  price: number;
  fees: number;
  discount: number;
  pictures: string[];
};
