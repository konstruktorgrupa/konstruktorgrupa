import { useState } from "react";

// let outerCirPos = CalcOuterCircPos(
//   heightOrWidth / 2,
//   window.innerWidth / 2,
//   heightOrWidth / 2 / 3,
//   210
// );

function CalcOuterCircPos(y1, x1, d, theta) {
  // Convert the angle to radians
  const radians = (theta * Math.PI) / 180;

  // Calculate the x and y coordinates of the second element
  const position = {
    x: x1 + d * Math.cos(radians),
    y: y1 + d * Math.sin(radians),
  };

  return position;
}

const heightOrWidth =
  window.innerHeight > window.innerWidth
    ? window.innerWidth
    : window.innerHeight;

function GetDistance() {
  const distance =
    heightOrWidth / 3 / 2 +
    heightOrWidth / 3 / 2 / 2 +
    heightOrWidth / 3 / 2 / 15;
  return distance;
}

let angle2 = 0;
let direction = 1;
const circPos = {
  1: 90,
  2: 45,
  3: 0,
  4: -45,
  5: -90,
  6: -135,
  7: -180,
  8: -225,
};

function testAni() {
  if (direction === 1) {
    if (angle2 >= 360) {
      direction = 0;
    }

    angle2 += 1;
  } else {
    if (angle2 <= 0) {
      direction = 1;
      setTimeout(() => {
        testAni();
      }, 5000);
      return;
    }
    angle2 -= 1;
  }

  let onamaANi = document.getElementsByClassName("logoAni1");

  for (let i = 1; i < 9; i++) {
    onamaANi[0].style.height = heightOrWidth / 3 - angle2 / 3 + "px";
    onamaANi[0].style.transform = `rotate(${angle2}deg)`;
    onamaANi[0].style.left =
      window.innerWidth / 2 - heightOrWidth / 3 / 2 + angle2 / 3 / 2 + "px";

    onamaANi[0].style.top =
      heightOrWidth / 2 - heightOrWidth / 3 / 2 + angle2 / 3 / 2 + "px";

    // left: screenCenter[0] - stateHeightOrWidth / 3 / 2,
    // top: screenCenter[1] - stateHeightOrWidth / 3 / 2,
    onamaANi[i].style.height = heightOrWidth / 3 / 2 - angle2 / 5 + "px";

    onamaANi[i].style.transform = `rotate(${-angle2}deg)`;
    onamaANi[i].style.left =
      CalcOuterCircPos(
        heightOrWidth / 2,
        window.innerWidth / 2,
        GetDistance() + angle2 / 3,
        angle2 - circPos[i]
      ).x -
      heightOrWidth / 3 / 2 / 2 +
      angle2 / 3 / 2 +
      "px";
    onamaANi[i].style.top =
      CalcOuterCircPos(
        heightOrWidth / 2,
        window.innerWidth / 2,
        GetDistance() + angle2 / 3,

        angle2 - circPos[i]
      ).y -
      heightOrWidth / 3 / 2 / 2 +
      angle2 / 3 / 2 +
      "px";
  }

  setTimeout(() => {
    testAni();
  }, 10);
}

setTimeout(() => {
  testAni();
}, 1000);

function ONamaAni(props) {
  const [angleT, setAngleT] = useState(0);

  // setAngleT(angle);

  let screenCenter = [props.screenWidth / 2, props.innerHeight / 2];
  const stateHeightOrWidth =
    props.innerHeight > props.screenWidth
      ? props.screenWidth
      : props.screenHeight;

  return (
    <div>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left: window.innerWidth / 2 - stateHeightOrWidth / 3 / 2, //  screenCenter[0] - props.screenWidth / 3 / 2,
          top: window.innerHeight / 2 - stateHeightOrWidth / 3 / 2, //  screenCenter[1] - props.innerHeight / 3 / 2,

          height: stateHeightOrWidth / 3,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni1.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          zIndex: 0,
          position: "absolute",

          left:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 - 90
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 - 90
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
          // zIndex: 1,
        }}
        src="./assets/logoAni/logoAni2.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 - 45
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 - 45
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
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
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 - 0
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 - 0
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
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
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 45
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 45
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni5.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 90
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 90
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni6.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 135
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 135
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni7.png"
      ></img>
      <img
        className="logoAni1"
        style={{
          position: "absolute",
          left:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 180
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 180
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
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
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 225
            ).x -
            heightOrWidth / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              heightOrWidth / 2,
              window.innerWidth / 2,
              stateHeightOrWidth / 3 / 2 + stateHeightOrWidth / 3 / 2 / 2 + 10,
              angle2 + 225
            ).y -
            heightOrWidth / 3 / 2 / 2 +
            "px",

          height: stateHeightOrWidth / 3 / 2,
          filter: "brightness(30%)",
          overflow: "hidden",
        }}
        src="./assets/logoAni/logoAni9.png"
      ></img>
    </div>
  );
}

export default ONamaAni;
