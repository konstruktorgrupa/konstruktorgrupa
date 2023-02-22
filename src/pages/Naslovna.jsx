import "./Grid.css";

import "../type/Type.css";
import Type from "../type/Type";

// import TypeText from "../comp/TypeText.jsx";

let run = 0;
function Naslovna(props) {
  const controlHeight =
    window.innerHeight > window.screen.availHeight
      ? window.screen.availHeight
      : window.innerHeight;

  let desk = window.innerWidth > controlHeight ? 1 : -1;
  let mob = window.innerWidth < controlHeight ? 1 : 0;

  let textMOD = window.innerWidth > controlHeight ? 9 : 4;

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
                  left: (i * window.innerWidth) / (3 + desk),
                  top: (e * window.innerWidth) / (3 + desk) + props.marginTop,

                  maxWidth: window.innerWidth / (3 + desk),
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
                  left: (i * window.innerWidth) / (3 + desk),
                  top: (e * window.innerWidth) / (3 + desk) + props.marginTop,
                  maxWidth: window.innerWidth / (3 + desk),
                  filter: "brightness(40%)",
                }}
                src={`./assets/naslovna/${21}.png`}
              />
              <div
                style={{
                  position: "absolute",
                  left:
                    (i * window.innerWidth) / (3 + desk) -
                    (i * window.innerWidth) / (3 + desk) / 20,
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
