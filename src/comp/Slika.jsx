import { useState } from "react";
import SlikaFocus from "./SlikaFocus";

function Slika(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  //test

  window.addEventListener(
    "resize",
    function (event) {
      setScreenWidth(window.innerWidth);
      // setScreenHeight(window.innerHeight);
    },
    true
  );

  function ImageBig() {
    document.getElementById("slikaFocus").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("imgSrc").src = props.img;
  }

  return (
    <div>
      <SlikaFocus />
      {/* <viev
        style={{
          width: 150,
          height: 150,
          overflow: "hidden",
          position: "absolute",
          // left: OFFSET_LEFT,
          // top: OFFSET_TOP,
        }}
      > */}
      <img
        style={{
          width: screenWidth / 4.2,
          height: screenWidth / 4.2,
          overflow: "hidden",
          border: "2px solid lime",
        }}
        src={props.img}
        onClick={ImageBig}
      />
      {/* </viev> */}
    </div>
  );
}

export default Slika;
