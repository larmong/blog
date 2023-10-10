import { ConfigProvider, Menu, MenuProps } from "antd";
import { Logo, LogoWrapper, Wrapper } from "./SideMenu.style";
import { useEffect, useState } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";
import { useRouter } from "next/router";
import getItem from "./getMenus/getMenus";

export default function SideMenu(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [menus, setMenus] = useState([
    {
      name: "JAVASCRIPT",
      icon: <RiJavascriptFill />,
      route: "/javascript",
      key: "1",
      sub: [
        {
          name: "all",
          route: "/javascript/all",
        },
        {
          name: "animation",
          route: "/javascript/animation",
        },
      ],
    },
    {
      name: "REACT",
      icon: <BiLogoReact />,
      route: "/react",
      key: "2",
      sub: [
        {
          name: "all",
          route: "/react/all",
        },
        {
          name: "animation",
          route: "/react/animation",
        },
      ],
    },
  ]);

  const onClickMoveToMenus: MenuProps["onClick"] = (e) => {
    void router.push(`${e.key}`);
  };

  useEffect(() => {
    if (!loading) {
      const createMenus: any = menus.map((el, index: number) =>
        getItem(el.name, el.route, el.icon, [
          ...el.sub.map((sub) => getItem(sub.name, sub.route)),
        ]),
      );
      console.log(createMenus);
      setMenus(createMenus);
      setLoading(true);
    }
  }, [menus]);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo
          onClick={() => {
            void router.push("/");
          }}
        ></Logo>
      </LogoWrapper>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              iconSize: 20,
              zIndexPopup: 10,
              itemColor: "#fff",
              itemBg: "transparent",
              itemActiveBg: "transparent",
              itemHoverColor: "rgba(255,255,255,0.6)",
              itemHoverBg: "#3d3d3d",
              itemSelectedBg: "#606060",
              itemSelectedColor: "#bfb8ff",
              itemMarginInline: 10,
            },
          },
        }}
      >
        <Menu
          onClick={onClickMoveToMenus}
          // defaultSelectedKeys={["1"]}
          defaultOpenKeys={["/javascript", "/react"]}
          mode="inline"
          items={menus}
        />
      </ConfigProvider>
    </Wrapper>
  );
}
