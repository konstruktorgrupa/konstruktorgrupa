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
}, 500);

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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
      <Menu screenWidth={screenWidth} />
      <Naslovna screenWidth={screenWidth} screenHeight={screenHeight} />
      <Galerija screenWidth={screenWidth} />
      <Kontakt screenWidth={screenWidth} />
      <ONama screenWidth={screenWidth} screenHeight={screenHeight} />
      <Usluge screenWidth={screenWidth} />

      {/* <CropThumbs /> */}
    </div>
  );
}

export default App;
