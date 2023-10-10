import { MenuProps } from "antd";
import { Key, ReactNode } from "react";

type MenuItem = Required<MenuProps>["items"][number];

export default function getItem(
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
