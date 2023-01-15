import { useReducer } from "react";
import ProductCardComponent from "../components/Cards/ProductCardComponent";
import { ProductInterface } from "../interfaces/ProductInterface";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";

const HomeView = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id:number) => console.log(id);
  const delFromCart = () => {};
  const clearCart = () => {};

  return (
    <div className="grid grid-cols-1 gap-6 p-8 mx-auto max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: ProductInterface, index: number) => {
        return (
          <ProductCardComponent
            key={index}
            addToCart={addToCart}
            data={product}
          />
        );
      })}
    </div>
  );
};

export default HomeView;
