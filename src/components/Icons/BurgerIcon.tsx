interface BurgerProps {
  cssClass: String;
  onHandlerCLick: () => void;
}
const BurgerIcon = ({ cssClass, onHandlerCLick }: BurgerProps) => {
  return (
    <svg
      onClick={onHandlerCLick}
      className={`${cssClass} BurguerIcon`}
      width="24"
      height="24"
      id="menu-bold"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
    >
      <path d="M83 70v8H13v-8h70zm0-26v8H13v-8h70zm0-26v8H13v-8h70z"></path>
    </svg>
  );
};

export default BurgerIcon;
