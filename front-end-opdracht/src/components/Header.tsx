import React from "react";
import { Link } from "react-router-dom";
import annie from "../img/Annie1.png";

export default function HeightSlider() {
  return (
    <>
      <div>
        <div className="App">
          <header>
            <Link to="/">
            <img className="Annie" src={annie} alt="" />
            </Link>
          </header>
        </div>
      </div>
    </>
  );
}
