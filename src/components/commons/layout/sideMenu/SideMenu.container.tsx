import { Menus } from "../menus";
import { sideMenuState } from "../../../../commons/store/store";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Logo, LogoWrapper } from "./SideMenu.style";
import { useEffect, useState } from "react";

export default function SideMenu() {
  const router = useRouter();

  const menus: any = Menus;
  const { Sider } = Layout;

  const [collapsed, setCollapsed] = useRecoilState(sideMenuState);
  const [current, setCurrent] = useState("");

  const onClickMoveToMenus: MenuProps["onClick"] = (e): void => {
    void router.push(`${e.key}`);
  };

  useEffect(() => {
    if (router.route === "/") {
      setCurrent("");
    } else {
      setCurrent(router.route);
    }
  }, [router]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value: boolean) => setCollapsed(value)}
      width={collapsed ? 80 : 280}
      style={{
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
      }}
    >
      <LogoWrapper
        collapsed={collapsed}
        onClick={() => {
          void router.push("/");
        }}
      >
        <Logo></Logo>
      </LogoWrapper>
      <Menu
        onClick={onClickMoveToMenus}
        selectedKeys={[current]}
        mode="inline"
        items={menus}
      />
    </Sider>
  );
}
