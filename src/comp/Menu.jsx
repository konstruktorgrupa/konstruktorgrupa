import { useState } from "react";

function Menu(props) {
  const [naslovnaS, setNaslovnaS] = useState("white");
  const [slikeS, setSlikeS] = useState("none");
  const [uslugeS, setUslugeS] = useState("none");
  const [kontktS, setKontaktS] = useState("none");
  const [onamaS, setOnamaS] = useState("none");

  const menuSelCol = [
    setNaslovnaS,
    setSlikeS,
    setUslugeS,
    setKontaktS,
    setOnamaS,
  ];

  const menuItems = ["naslovna", "slike", "usluge", "kontakt", "onama"];

  function MenuHandle(mItem) {
    for (let i = 0; i < menuItems.length; i++) {
      if (mItem === menuItems[i]) {
        document.getElementById(menuItems[i]).style.display = "block";
        menuSelCol[i]("white");
      } else {
        document.getElementById(menuItems[i]).style.display = "none";
        menuSelCol[i]("blue");
      }
    }
  }

  return (
    <div
      id="menu"
      style={{
        position: "fixed",
        left: "0",
        top: "0px",
        display: "flex",
        backgroundColor: "rgb(215,255,0,0.9",
        zIndex: 100,
        fontSize: props.marginTop / 8,
        color: "blue",
        // height: '300px',
        margin: 0,
        padding: 0,
        height: props.marginTop,
      }}
    >
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: naslovnaS }}
        onClick={() => MenuHandle("naslovna")}
      >
        NASLOVNA
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: slikeS }}
        onClick={() => MenuHandle("slike")}
      >
        GALERIJA
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: uslugeS }}
        onClick={() => MenuHandle("usluge")}
      >
        USLUGE
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: kontktS }}
        onClick={() => MenuHandle("kontakt")}
      >
        KONTAKT
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: onamaS }}
        onClick={() => MenuHandle("onama")}
      >
        O NAMA
      </h1>
    </div>
  );
}

export default Menu;
