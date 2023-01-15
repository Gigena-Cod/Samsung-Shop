import { Link } from "react-router-dom";
import CloseIcon from "../Icons/CloseIcon";

interface NavigationMobileProps {
  Links: Link[];
  toggle: boolean;
  onClickToggleHandler: () => void;
}

interface Link {
  text: string;
  url: string;
}
const NavigationMobileComponent = ({
  Links,
  toggle,
  onClickToggleHandler,
}: NavigationMobileProps) => {
  return (
    <div className=" navigation__mobile">
      <div
        onClick={onClickToggleHandler}
        className={`${
          toggle ? "bg-opacity-30 visible" : "bg-opacity-0 invisible"
        } transition-all duration-300 ease-in-out z-10 left-0 top-0 bg-black  fixed h-screen w-full bkd-opacity`}
      ></div>

      <ul
        className={`${
          toggle ? "right-0 " : " -right-full "
        } transition-all duration-300 ease-linear  top-0 z-20 h-screen w-[20rem] fixed bg-white navigation__links`}
      >
        <li className="flex h-14 px-4 items-center justify-end close">
          <CloseIcon
            onHandlerCLick={onClickToggleHandler}
            cssClass="cursor-pointer"
          />
        </li>
        {Links.map((link, index) => (
          <li key={index} className="h-14 hover:text-white hover:bg-black link">
            <Link
              className="w-full h-full  flex items-center font-normal px-4"
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMobileComponent;
