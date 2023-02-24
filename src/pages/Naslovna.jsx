import "./Grid.css";

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
    </div>
  );
}

export default Naslovna;
