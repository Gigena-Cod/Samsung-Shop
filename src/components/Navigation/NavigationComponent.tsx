import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import BagIcon from "../Icons/BagIcon";
import BurgerIcon from "../Icons/BurgerIcon";
import SearchIcon from "../Icons/SearchIcon";
import NavigationDesktopComponent from "./NavigationDesktopComponent";
import NavigationMobileComponent from "./NavigationMobileComponent";

const NavigationComponent = () => {
  const { toggle, onClickToggleHandler } = useToggle();

  const Links = [
    {
      text: "Informatica",
      url: "/monitores",
    },
    {
      text: "TV & Audio",
      url: "/tvs",
    },
    {
      text: "Móviles",
      url: "/moviles",
    },
  ];
  return (
    <div className="navigation__container">
      <div className="md:flex md:gap-4 navigation__content">
        <NavigationMobileComponent
          Links={Links}
          toggle={toggle}
          onClickToggleHandler={onClickToggleHandler}
        />
        <NavigationDesktopComponent Links={Links} />

        {/* ICONOS  */}
        <div className="flex items-center gap-6 navigation__icon">
          <SearchIcon />
          <Link to={"/checkout/cart"}>
          <BagIcon  cssClass={"h-8 w-fit"} />
          </Link>
          <BurgerIcon
            onHandlerCLick={onClickToggleHandler}
            cssClass={"md:hidden cursor-pointer h-8 w-fit"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
