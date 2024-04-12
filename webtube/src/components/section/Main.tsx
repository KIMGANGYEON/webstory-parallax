import React, { ReactNode } from "react";
import Header from "./Header";
import { Footer } from "./Footer";

interface MainProps {
  children: ReactNode;
}

const Main: React.FunctionComponent<MainProps> = (props) => {
  return (
    <>
      <Header />
      <div id="main" role="main">
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Main;
