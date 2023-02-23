import "./App.css";
import { useState } from "react";
import Menu from "./comp/Menu";
import Naslovna from "./pages/Naslovna";
// import Slike from "./pages/Slike1";
import Kontakt from "./pages/Kontakt";
import ONama from "./pages/ONama";
import Usluge from "./pages/Usluge";

import Galerija from "./pages/Galerija";

// import CropThumbs from "./comp/CropThumbs.jsx";

// TODO issue with galery showing up on naslovna on first load
setTimeout(() => {
  document.getElementById("slike").style.display = "none";

  // for testing
  // document.getElementById("naslovna").style.display = "none";
  // document.getElementById("onama").style.display = "block";
}, 100);

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const vmin =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;

  const vhv = vmin / 100;

  function vhToPixels(vh) {
    return Math.round((vmin / (100 / vh)) * 3);
  }
  const menuTop = vhToPixels(vhv);
  const desoOrMob = window.innerWidth > window.innerHeight ? 65 : 35;
  let marginTop = menuTop >= desoOrMob ? desoOrMob : menuTop;

  //test

  window.addEventListener(
    "resize",
    function (event) {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    },
    true
  );

  function disableselect(e) {
    return false;
  }

  function reEnable() {
    return true;
  }

  document.onselectstart = new Function(" return false");

  if (window.sidebar) {
    document.onmousedown = disableselect;
    document.onClick = reEnable;
  }

  //full screen
  // setTimeout(() => document.documentElement.requestFullscreen(), 2000);

  return (
    <div className="App">
      <Menu screenWidth={screenWidth} marginTop={marginTop} />
      <Naslovna
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        marginTop={marginTop}
      />
      <Galerija screenWidth={screenWidth} marginTop={marginTop} />
      <Kontakt screenWidth={screenWidth} marginTop={marginTop} />
      <ONama
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        marginTop={marginTop}
      />
      <Usluge screenWidth={screenWidth} marginTop={marginTop} />

      {/* <CropThumbs /> */}
    </div>
  );
}

export default App;
