import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";

export const Menus = [
  {
    name: "JAVASCRIPT",
    icon: <RiJavascriptFill />,
    route: "javascript",
  },
  {
    name: "REACT",
    icon: <BiLogoReact />,
    route: "react",
  },
].map((menu) => ({
  key: `/${menu.route}`,
  icon: menu.icon,
  label: menu.name,
}));
