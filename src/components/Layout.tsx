"use client";
import React, { FC } from "react";
import Topbar from "./topbar/Topbar";
import Footerbar from "./footerbar/Footerbar";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Topbar />
      </header>
      <main style={{ marginTop: "100px", marginBottom: "100px" }}>
        {children}
      </main>
      <footer>
        <Footerbar />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
