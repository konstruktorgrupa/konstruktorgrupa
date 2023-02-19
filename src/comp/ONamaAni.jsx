import { useState } from "react";

// let outerCirPos = CalcOuterCircPos(
//   window.innerHeight / 2,
//   window.innerWidth / 2,
//   window.innerHeight / 2 / 3,
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

function GetDistance() {
  const distance =
    window.innerHeight / 3 / 2 +
    window.innerHeight / 3 / 2 / 2 +
    window.innerHeight / 3 / 2 / 11;
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
    onamaANi[0].style.height = window.innerHeight / 3 - angle2 / 1.6 + "px";
    onamaANi[0].style.transform = `rotate(${angle2}deg)`;
    onamaANi[0].style.left =
      window.innerWidth / 2 -
      window.innerHeight / 3 / 2 +
      angle2 / 1.6 / 2 +
      "px";

    onamaANi[0].style.top =
      window.innerHeight / 2 -
      window.innerHeight / 3 / 2 +
      angle2 / 1.6 / 2 +
      "px";

    // left: screenCenter[0] - props.screenHeight / 3 / 2,
    // top: screenCenter[1] - props.screenHeight / 3 / 2,
    onamaANi[i].style.height = window.innerHeight / 3 / 2 - angle2 / 3 + "px";

    onamaANi[i].style.transform = `rotate(${-angle2}deg)`;
    onamaANi[i].style.left =
      CalcOuterCircPos(
        window.innerHeight / 2,
        window.innerWidth / 2,
        GetDistance() + angle2 / 3,
        angle2 - circPos[i]
      ).x -
      window.innerHeight / 3 / 2 / 2 +
      angle2 / 3 / 2 +
      "px";
    onamaANi[i].style.top =
      CalcOuterCircPos(
        window.innerHeight / 2,
        window.innerWidth / 2,
        GetDistance() + angle2 / 3,

        angle2 - circPos[i]
      ).y -
      window.innerHeight / 3 / 2 / 2 +
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

          left:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 - 90
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 - 90
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

          height: props.screenHeight / 3 / 2,
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
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 - 45
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 - 45
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 - 0
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 - 0
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 45
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 45
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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
          left:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 90
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 90
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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
          left:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 135
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 135
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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
          left:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 180
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 180
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 225
            ).x -
            window.innerHeight / 3 / 2 / 2 +
            "px",
          top:
            CalcOuterCircPos(
              window.innerHeight / 2,
              window.innerWidth / 2,
              props.screenHeight / 3 / 2 + props.screenHeight / 3 / 2 / 2 + 10,
              angle2 + 225
            ).y -
            window.innerHeight / 3 / 2 / 2 +
            "px",

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

// let angle = 1;
// let ring = 0;
// let centerCirc = 0;
// setTimeout(() => {
//   let onamaANi = document.getElementsByClassName("logoAni1");
//   centerCirc = parseInt(onamaANi[0].style.height);
//   ring = parseInt(onamaANi[1].style.height);

//   localStorage.setItem("elHeight", JSON.stringify([centerCirc, ring]));
//   ONamaANi();
// }, 3000);

// function GetScreenCenter() {
//   const screenCenterT = {
//     second: [
//       window.innerWidth / 2 - window.innerHeight / 6 / 2,
//       window.innerHeight / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 4,
//     ],
//     third: [
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 +
//         window.innerHeight / 5.65,
//       window.innerHeight / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 5.65,
//     ],
//     fourth: [
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 +
//         window.innerHeight / 4,
//       window.innerHeight / 2 - window.innerHeight / 6 / 2,
//     ],
//     fifth: [
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 +
//         window.innerHeight / 5.65,
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 5.65,
//     ],
//     six: [
//       window.innerWidth / 2 - window.innerHeight / 6 / 2,
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 4,
//     ],
//     seven: [
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 +
//         window.innerHeight / 5.65,
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 5.65,
//     ],
//     eight: [
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 +
//         window.innerWidth / 4,
//       window.innerWidth / 2 - window.innerHeight / 6 / 2,
//     ],
//     nine: [
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 5.65,
//       window.innerWidth / 2 -
//         window.innerHeight / 6 / 2 -
//         window.innerHeight / 5.65,
//     ],
//   };
//   localStorage.setItem("center", JSON.stringify(screenCenterT));
//   return screenCenterT;
// }

// // let second = [
// //   center[0] - window.innerHeight / 6 / 2,
// //   center[1] - window.innerHeight / 6 / 2 - window.innerHeight / 4,
// // ];

// let direction = 0;
// function ONamaANi() {
//   let elHeight = JSON.parse(localStorage.getItem("elHeight"));
//   GetScreenCenter();
//   let onamaANi = document.getElementsByClassName("logoAni1");

//   if (direction === 0) {
//     angle += 0.5;
//     if (angle >= 360) {
//       direction = 1;
//     }
//   } else {
//     angle -= 0.5;

//     if (angle <= 0) {
//       angle = 0;
//       direction = 0;
//       onamaANi[0].style.height = elHeight[0];
//       onamaANi[1].style.height = elHeight[1];
//       onamaANi[2].style.height = elHeight[1];
//       onamaANi[3].style.height = elHeight[1];
//       onamaANi[4].style.height = elHeight[1];
//       onamaANi[5].style.height = elHeight[1];
//       onamaANi[6].style.height = elHeight[1];
//       onamaANi[7].style.height = elHeight[1];
//       onamaANi[8].style.height = elHeight[1];
//       setTimeout(() => {
//         ONamaANi();
//       }, 2000);
//       return;
//     }
//   }

//   // onamaANi[0].style.transform = `rotate(${angle}deg)`;
//   // onamaANi[0].style.height = centerCirc - angle / 2 + "px";

//   // onamaANi[1].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[1].style.left = center["second"][0] + angle + "px";
//   // // onamaANi[1].style.top = center["second"][1] + angle + "px";
//   // onamaANi[1].style.height = ring - angle / 2 + "px";

//   // onamaANi[2].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[2].style.left = center["third"][0] + angle + "px";
//   // // onamaANi[2].style.top = center["third"][1] + angle + "px";
//   // onamaANi[2].style.height = ring - angle / 2 + "px";

//   // onamaANi[3].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[3].style.left = center["fourth"][0] + angle + "px";
//   // // onamaANi[3].style.top = center["fourth"][1] + angle + "px";
//   // onamaANi[3].style.height = ring - angle / 2 + "px";

//   // onamaANi[4].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[4].style.left = center["fifth"][0] + angle + "px";
//   // // onamaANi[4].style.top = center["fifth"][1] + angle + "px";
//   // onamaANi[4].style.height = ring - angle / 2 + "px";

//   // onamaANi[5].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[5].style.left = center["six"][0] + angle + "px";
//   // // onamaANi[5].style.bottom = center["six"][1] + angle + "px";
//   // onamaANi[5].style.height = ring - angle / 2 + "px";
//   // onamaANi[6].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[6].style.left = center["seven"][0] + angle + "px";
//   // // onamaANi[6].style.bottom = center["seven"][1] + angle + "px";
//   // onamaANi[6].style.height = ring - angle / 2 + "px";

//   // onamaANi[7].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[7].style.right = center["eight"][0] + angle + "px";
//   // // onamaANi[7].style.bottom = center["eight"][1] + angle + "px";
//   // onamaANi[7].style.height = ring - angle / 2 + "px";

//   // onamaANi[8].style.transform = `rotate(${-angle}deg)`;
//   // // onamaANi[8].style.right = center["nine"][0] + angle + "px";
//   // // onamaANi[8].style.top = center["nine"][1] + angle + "px";
//   // onamaANi[8].style.height = ring - angle / 2 + "px";

//   //   onamaANi[1].style.left =

//   setTimeout(() => {
//     ONamaANi();
//   }, 5);
// }
