import React from "react";
import Sider from "../Components/Sider";
import ConfigTheme from "../Components/ConfigTheme";
import Header from "../Components/Header";

const styleContent = {
  display: "flex"
};

const Home = () => (
  <React.Fragment>
    <div style={styleContent}>
      <Sider />
      <Header />
    </div>
    <ConfigTheme />
  </React.Fragment>
);

export default Home;
