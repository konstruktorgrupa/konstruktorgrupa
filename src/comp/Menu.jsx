import { useState } from "react";

function Menu(props) {
  const [naslovnaS, setNaslovnaS] = useState("black");
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
        menuSelCol[i]("black");
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
        zIndex: 10,
        // fontSize: "30px",
        color: "blue",
        // height: '300px',
        margin: 0,
        padding: 0,
      }}
    >
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: naslovnaS }}
        onClick={() => MenuHandle("naslovna")}
      >
        Naslovna
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: slikeS }}
        onClick={() => MenuHandle("slike")}
      >
        Slike
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: uslugeS }}
        onClick={() => MenuHandle("usluge")}
      >
        Usluge
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: kontktS }}
        onClick={() => MenuHandle("kontakt")}
      >
        Kontakt
      </h1>
      <h1
        className="menu"
        style={{ width: props.screenWidth / 5, color: onamaS }}
        onClick={() => MenuHandle("onama")}
      >
        O Nama
      </h1>
    </div>
  );
}

export default Menu;
