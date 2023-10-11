import { Layout } from "antd";
import { Route, Search, Wrapper } from "./Header.style";
import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";

export default function Header(props) {
  const [route, setRoute] = useState("");
  const { Header } = Layout;

  useEffect(() => {
    setRoute(String(props.route.split("/")[1]));
  }, [props.route]);

  return (
    <Header style={{ padding: 0, background: "transparent", height: "100px" }}>
      <Wrapper>
        <Route>
          <HiHome />
          &#187;<span>{route}</span>
        </Route>
        <Search>Search</Search>
      </Wrapper>
    </Header>
  );
}
