import { Link } from "react-router-dom";
interface NavigationDesktopProps {
  Links: Link[];
}
interface Link {
  text: string;
  url: string;
}
const NavigationDesktopComponent = ({ Links }: NavigationDesktopProps) => {
  return (
    <ul className="hidden md:flex gap-2 navigation__links">
      {Links.map((link: Link, index: number) => (
        <li key={index} className="h-12 rounded transition-all duration-300 ease-in-out hover:text-white hover:bg-black link">
          <Link
            className="w-full h-full text-base flex items-center font-normal px-4"
            to={link.url}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationDesktopComponent;
