// let sahovnica = [];
// let color = "rgb(255, 0, 0,0.5)";

// const isEven = (number) => (number & 1) === 0;
// let screenHeight = window.innerHeight;
// let screenWidth = window.innerWidth;
// for (let e = 0; e < screenWidth / 20; e++) {
//   for (let i = 0; i < screenHeight / 20; i++) {
//     if (color === "rgb(255, 0, 0,0.5)") {
//       color = "none";
//     } else {
//       color = "rgb(255, 0, 0,0.5)";
//     }
//     sahovnica.push(
//       <div
//         style={{
//           position: "absolute",
//           backgroundColor: color,
//           width: 20,
//           height: 20,
//           top: isEven(e) === true ? 20 * i : 20 * i - 20,
//           left: 20 * e,
//         }}
//       ></div>
//     );
//   }
// }

function Naslovna() {
  return (
    <div id="naslovna">
      <div>
        <img
          style={{
            position: "absolute",
            top: 38,
            left: 0,
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={"./assets/logos/naslovna.jpg"}
        />
      </div>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "white",
          width: "101vw",
          height: "101vh",
        }}
      >
        {" "}
      </div> */}
      {/* {sahovnica} */}

      {/* <div>{sahovnica}</div> */}
      {/* 
      <div>
        <img
          style={{
            position: "absolute",
            top: 50,
            left: 50,
            maxWidth: "20%",
            maxHeight: "20%",
          }}
          src="./assets/logos/Logo 2022.png"
        />
      </div> */}
    </div>
  );
}

export default Naslovna;
