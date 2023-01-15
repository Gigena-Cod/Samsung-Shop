import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import NavigationComponent from "./Navigation/NavigationComponent";

const HeaderComponent = () => {
  return (
    <div className="w-full h-20 border-b shadow-md header__container">
      <div className="flx justify-between max-w-screen-2xl h-full mx-auto flex items-center px-8 header__content">
        <div className="header__logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo Samsung shop" />
          </Link>
        </div>
        <NavigationComponent/>
      </div>
    </div>
  );
};

export default HeaderComponent;
