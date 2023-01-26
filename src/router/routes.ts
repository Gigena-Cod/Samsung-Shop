const PAGEPATH = {
  HOME: "../infrastructure/pages/Home.vue",
  DETAIL_PRODUCT: "../infrastructure/pages/DetailProduct.vue",
  CART: ".../infrastructure/pages/Cart.vue",
}; 
const routes = [
  {
    namespace:'home',
    path: "/",
    component: () => import(PAGEPATH.HOME),
  },
  {
    name: "detailProduct",
    path: "/:productName/:productId",
    component: () => import(PAGEPATH.DETAIL_PRODUCT),
  },
  {
    name: "cart",
    path: "/checkout/cart",
    component: () => import(PAGEPATH.CART),
  },
];

export default routes;
