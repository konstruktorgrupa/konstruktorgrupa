import "./Grid.css";

import "../type/Type.css";
import Type from "../type/Type";

// import TypeText from "../comp/TypeText.jsx";

let run = 0;
function Naslovna(props) {
  const controlHeight =
    props.screenHeight > window.screen.availHeight
      ? window.screen.availHeight
      : props.screenHeight;

  let desk = props.screenWidth > controlHeight ? 1 : -1;
  let mob = props.screenWidth < controlHeight ? 1 : 0;

  let textMOD = props.screenWidth > controlHeight ? 9 : 4;

  let nasSlike = [];
  function NaslovnaSlike() {
    let imgIndex = 0;
    for (let i = 0; i < 3 + desk; i++) {
      for (let e = 0; e < 3 + mob; e++) {
        if (imgIndex !== textMOD) {
          nasSlike.push(
            <div key={imgIndex}>
              <img
                style={{
                  position: "absolute",
                  left: (i * props.screenWidth) / (3 + desk),
                  top: (e * props.screenWidth) / (3 + desk) + props.marginTop,

                  maxWidth: props.screenWidth / (3 + desk),
                  zIndex: 1,
                }}
                src={`./assets/naslovna/${imgIndex}.png`}
              />
            </div>
          );
        } else if (imgIndex === textMOD) {
          nasSlike.push(
            <div key={imgIndex}>
              <img
                style={{
                  position: "absolute",
                  left: (i * props.screenWidth) / (3 + desk),
                  top: (e * props.screenWidth) / (3 + desk) + props.marginTop,
                  maxWidth: props.screenWidth / (3 + desk),
                  filter: "brightness(40%)",
                }}
                src={`./assets/naslovna/${21}.png`}
              />
              <div
                style={{
                  position: "absolute",
                  left:
                    (i * props.screenWidth) / (3 + desk) -
                    (i * props.screenWidth) / (3 + desk) / 20,
                  top: props.marginTop,
                }}
              >
                <Type />
              </div>
            </div>
          );
        }
        imgIndex++;
      }
    }
  }
  // if (run === 1) {
  NaslovnaSlike();
  //   run++;
  // } else {
  //   run++;
  // }

  return <div id="naslovna">{nasSlike}</div>;
}

export default Naslovna;
