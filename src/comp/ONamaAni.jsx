import { useState } from "react";
let angle = 1;
let ring = 0;
let centerCirc = 0;
setTimeout(() => {
  let onamaANi = document.getElementsByClassName("logoAni1");
  centerCirc = onamaANi[0].style.height;
  ring = onamaANi[1].style.height;

  ONamaANi();
}, 1000);

function GetScreenCenter() {
  const screenCenterT = {
    second: [
      window.innerWidth / 2 - window.innerHeight / 6 / 2,
      window.innerHeight / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 4,
    ],
    third: [
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 +
        window.innerHeight / 5.65,
      window.innerHeight / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 5.65,
    ],
    fourth: [
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 +
        window.innerHeight / 4,
      window.innerHeight / 2 - window.innerHeight / 6 / 2,
    ],
    fifth: [
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 +
        window.innerHeight / 5.65,
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 5.65,
    ],
    six: [
      window.innerWidth / 2 - window.innerHeight / 6 / 2,
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 4,
    ],
    seven: [
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 +
        window.innerHeight / 5.65,
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 5.65,
    ],
    eight: [
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 +
        window.innerWidth / 4,
      window.innerWidth / 2 - window.innerHeight / 6 / 2,
    ],
    nine: [
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 5.65,
      window.innerWidth / 2 -
        window.innerHeight / 6 / 2 -
        window.innerHeight / 5.65,
    ],
  };
  localStorage.setItem("center", JSON.stringify(screenCenterT));
  return screenCenterT;
}

// let second = [
//   center[0] - window.innerHeight / 6 / 2,
//   center[1] - window.innerHeight / 6 / 2 - window.innerHeight / 4,
// ];

let direction = 0;
function ONamaANi() {
  let center = JSON.parse(localStorage.getItem("center"));
  GetScreenCenter();

  if (direction === 0) {
    angle++;
    if (angle >= 360) {
      direction = 1;
    }
  } else {
    angle--;
    if (angle <= 0) {
      direction = 0;

      setTimeout(() => {
        ONamaANi();
      }, 5000);
      return;
    }
  }

  let onamaANi = document.getElementsByClassName("logoAni1");

  onamaANi[0].style.transform = `rotate(${angle}deg)`;
  onamaANi[0].style.height = centerCirc.replace(/\D/g, "") - angle + "px";

  onamaANi[1].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[1].style.left = center["second"][0] + angle + "px";
  // onamaANi[1].style.top = center["second"][1] - angle + "px";
  onamaANi[1].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[2].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[2].style.left = center["third"][0] + angle + "px";
  // onamaANi[2].style.top = center["third"][1] - angle + "px";
  onamaANi[2].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[3].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[3].style.left = center["fourth"][0] + angle + "px";
  // onamaANi[3].style.top = center["fourth"][1] - angle + "px";
  onamaANi[3].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[4].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[4].style.left = center["fifth"][0] + angle + "px";
  // onamaANi[4].style.top = center["fifth"][1] - angle + "px";
  onamaANi[4].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[5].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[5].style.left = center["six"][0] + angle + "px";
  // onamaANi[5].style.bottom = center["six"][1] + angle + "px";
  onamaANi[5].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[6].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[6].style.left = center["seven"][0] + angle + "px";
  // onamaANi[6].style.bottom = center["seven"][1] + angle + "px";
  onamaANi[6].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[7].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[7].style.right = center["eight"][0] - angle + "px";
  // onamaANi[7].style.bottom = center["eight"][1] + angle + "px";
  onamaANi[7].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  onamaANi[8].style.transform = `rotate(${-angle}deg)`;
  // onamaANi[8].style.right = center["nine"][0] + angle + "px";
  // onamaANi[8].style.top = center["nine"][1] - angle + "px";
  onamaANi[8].style.height = ring.replace(/\D/g, "") - angle / 2 + "px";

  //   onamaANi[1].style.left =

  setTimeout(() => {
    ONamaANi();
  }, 20);
}

function ONamaAni(props) {
  const [angleT, setAngleT] = useState(0);

  // setAngleT(angle);

  let screenCenter = [props.screenWidth / 2, props.screenHeight / 2];
  return (
    <div>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left: screenCenter[0] - props.screenHeight / 3 / 2,
          top: screenCenter[1] - props.screenHeight / 3 / 2,

          height: props.screenHeight / 3,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni1.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left: screenCenter[0] - props.screenHeight / 6 / 2,
          top:
            screenCenter[1] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 4,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni2.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            screenCenter[0] -
            props.screenHeight / 6 / 2 +
            props.screenHeight / 5.65,
          top:
            screenCenter[1] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 5.65,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni3.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            screenCenter[0] -
            props.screenHeight / 6 / 2 +
            props.screenHeight / 4,
          top: screenCenter[1] - props.screenHeight / 6 / 2,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni4.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            screenCenter[0] -
            props.screenHeight / 6 / 2 +
            props.screenHeight / 5.65,
          bottom:
            screenCenter[1] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 5.65,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni5.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left: screenCenter[0] - props.screenHeight / 6 / 2,
          bottom:
            screenCenter[1] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 4,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni6.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          right:
            screenCenter[0] -
            props.screenHeight / 6 / 2 +
            props.screenHeight / 5.65,
          bottom:
            screenCenter[1] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 5.65,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni7.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          right:
            screenCenter[0] -
            props.screenHeight / 6 / 2 +
            props.screenHeight / 4,
          top: screenCenter[1] - props.screenHeight / 6 / 2,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni8.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            screenCenter[0] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 5.65,
          top:
            screenCenter[1] -
            props.screenHeight / 6 / 2 -
            props.screenHeight / 5.65,

          height: props.screenHeight / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni9.png"
      ></img>
    </div>
  );
}

export default ONamaAni;
