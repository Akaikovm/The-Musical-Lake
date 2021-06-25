import { Fragment } from "react";
import BandImage from "../assets/Background.jpg";
import "../components/Header.css";

import React from "react";

function Header() {
  return (
    <Fragment>
      <header className="header">
        <h1>The Musical Lake</h1>
      </header>
      <div className="main-image">
        <img src={BandImage} alt="Band" />
      </div>
    </Fragment>
  );
}

export default Header;
