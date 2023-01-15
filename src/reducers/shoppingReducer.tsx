import { TYPES } from "../actions/shoppingAction";
import { ProductInterface } from "../interfaces/ProductInterface";
import { ShoppingInterface } from "../interfaces/shoppingInterface";

export const shoppingInitialState: ShoppingInterface = {
  products: [
    {
      id: 'af9fdf4a-9511-11ed-a1eb-0242ac120002',
      name: '50" UHD 4K Smart TV AU7000',
      code: "UN55AU7000GCZB",
      price: 139999,
      stock: 10,
      fees: 6,
      discount: 10,
      pictures: [
        "https://samsungar.vtexassets.com/arquivos/ids/180361-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/176326-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/176325-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/176327-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/176330-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/176328-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/176329-1200-auto?width=1200&height=auto&aspect=true",
      ],
    },
    {
      id: 'a70247e2-9511-11ed-a1eb-0242ac120002',
      name: "Tablet Galaxy Tab A8 10.5” Wi-Fi Silver",
      price: 99999,
      stock: 5,
      fees: 3,
      code: "SM-X200NZSMARO",
      discount: 15,
      pictures: [
        "https://samsungar.vtexassets.com/arquivos/ids/180347-800-auto?width=800&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/180312-1200-auto?width=1200&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/180313-1200-auto?width=1200&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/180315-1200-auto?width=1200&height=auto&aspect=true",
      ],
    },
    {
      id: '9c248538-9511-11ed-a1eb-0242ac120002',
      name: "Celular Galaxy A53 5G Negro",
      price: 139999,
      stock: 15,
      fees: 10,
      code: "SM-A536EZKAARO",
      discount: 5,
      pictures: [
        "https://samsungar.vtexassets.com/arquivos/ids/180603-1200-auto?width=1200&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/180602-1200-auto?width=1200&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/180605-1200-auto?width=1200&height=auto&aspect=true",
        "https://samsungar.vtexassets.com/arquivos/ids/180867-800-auto?width=800&height=auto&aspect=true",
      ],
    },
  ],
  cart: [],
};

export const shoppingReducer = (
  state: ShoppingInterface,
  action: { type: string; payload?: ProductInterface }
) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    default:
      return state;
  }
};
