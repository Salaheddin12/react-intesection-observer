import React, { useEffect } from "react";
import MainNav from "./main-nav";
import AccNav from "./acc-nav";

const Header = ({ inView }) => {
  useEffect(() => {
    console.log(inView);
  }, []);
  return (
    <header className={inView ? "" : "nav-scrolled"}>
      <a href="#" className="site-logo" aria-label="homepage">
        IntObs
      </a>
      <MainNav />
      <AccNav />
    </header>
  );
};

export default Header;
