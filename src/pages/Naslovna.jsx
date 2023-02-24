import "./Grid.css";
import Three from "../comp/three/Three";

// import TypeText from "../comp/TypeText.jsx";

// const typewriterWidth = document.getElementById("typewriter").offsetWidth;
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
            ? `./assets/naslovna/desk3.png`
            : `./assets/naslovna/mobile2.png`
        }
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: props.marginTop,
          width: props.screenWidth > props.screenHeight ? "25vw" : "50vw",
          height: props.screenWidth > props.screenHeight ? "25vw" : "50vw",
        }}
      >
        <Three />
      </div>
    </div>
  );
}

export default Naslovna;
