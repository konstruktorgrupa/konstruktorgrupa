import "./Grid.css";

import "../type/Type.css";
import Type from "../type/Type";

// import TypeText from "../comp/TypeText.jsx";

let run = 0;
function Naslovna(props) {
  return (
    <div id="naslovna">
      <img
        style={{
          position: "absolute",
          left: 0,
          top: props.marginTop,
          width: "100%", //props.screenWidth,
        }}
        src={
          props.screenWidth > props.screenHeight
            ? `./assets/naslovna/desk1.png`
            : `./assets/naslovna/mobile2.png`
        }
      />
      <div
        style={{
          position: "absolute",
          left:
            props.screenWidth > props.screenHeight
              ? (props.screenWidth / 4) * 3 - props.screenWidth / 4 / 8
              : props.screenWidth / 2 - props.screenWidth / 4 / 8,

          top: props.marginTop * 2,
          fontSize:
            window.innerWidth > window.innerHeight ? "3vmin" : "2.5vmin",
        }}
      >
        <Type />
      </div>
    </div>
  );
}

export default Naslovna;
