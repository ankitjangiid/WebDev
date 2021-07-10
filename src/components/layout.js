/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children, dark, setDark }) {
  // this is to define the header to sticky or not
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header
          className={`${isSticky ? "sticky" : "unSticky"}`}
          dark={dark}
          setDark={setDark}
        />
      </Sticky>
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
