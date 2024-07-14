"use client";
import React, { FC } from "react";
import Topbar from "./topbar/Topbar";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Topbar />
      </header>
      <main style={{ marginTop: "100px" }}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
