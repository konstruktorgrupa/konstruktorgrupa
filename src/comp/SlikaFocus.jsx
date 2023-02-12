import { useState } from "react";

function SlikaFocus(props) {
  const [scrollOffset, setScrollOffset] = useState(0);
  function CloseImg() {
    document.getElementById("slikaFocus").style.display = "none";
    document.getElementById("menu").style.display = "flex";
  }

  window.addEventListener(
    "scroll",
    function (event) {
      setScrollOffset(window.pageYOffset || document.documentElement.scrollTop);
    },
    true
  );

  return (
    <div
      id="slikaFocus"
      style={{
        position: "absolute",
        display: "none",
        bottom: -scrollOffset,
        left: 0,
        backgroundColor: "rgb(0,0,0,0.8",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <img id="imgSrc" style={{ maxHeight: "100%", maxWidth: "100%" }} />

      <button
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          height: "50px",
          width: "50px",
          backgroundColor: "rgb(215,255,0,0.8",
          fontSize: "30px",
          padding: 0,
        }}
        onClick={CloseImg}
      >
        X
      </button>
    </div>
  );
}

export default SlikaFocus;
