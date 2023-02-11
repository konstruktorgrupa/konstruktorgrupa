import Sahovnica from "../comp/Sahovnica";

let sahovnica = [];
let color = "red";

const isEven = (number) => (number & 1) === 0;
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
for (let e = 0; e < screenWidth / 20; e++) {
  for (let i = 0; i < screenHeight / 20; i++) {
    if (color === "red") {
      color = "none";
    } else {
      color = "red";
    }
    sahovnica.push(
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          width: 20,
          height: 20,
          top: isEven(e) === true ? 20 * i : 20 * i - 20,
          left: 20 * e,
        }}
      ></div>
    );
  }
}

function Naslovna() {
  return (
    <div id="naslovna">
      <div
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
      </div>
      {/* {sahovnica} */}

      <div>{sahovnica}</div>

      <div>
        <img src="./assets/logos/Logo 2022.png" className="klogo" />
      </div>
    </div>
  );
}

export default Naslovna;
