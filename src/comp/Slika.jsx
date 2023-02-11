import { useState } from "react";
import SlikaFocus from "./SlikaFocus";

function Slika(props) {
  function ImageBig() {
    document.getElementById("slikaFocus").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("imgSrc").src = props.img;
  }

  return (
    <div>
      <SlikaFocus />
      <img
        style={{ width: props.screenWidth / 5 }}
        src={props.img}
        onClick={ImageBig}
      />
    </div>
  );
}

export default Slika;
