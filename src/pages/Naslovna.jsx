import "./Grid.css";

import "../type/Type.css";
import Type from "../type/Type";

// import TypeText from "../comp/TypeText.jsx";

let run = 0;
function Naslovna(props) {
  let desk = props.screenWidth > props.screenHeight ? 1 : -1;
  let mob = props.screenWidth < props.screenHeight ? 1 : 0;

  let textMOD = props.screenWidth > props.screenHeight ? 9 : 4;

  let nasSlike = [];
  function NaslovnaSlike() {
    let imgIndex = 0;
    for (let i = 0; i < 3 + desk; i++) {
      for (let e = 0; e < 3 + mob; e++) {
        console.log(
          "🚀 ~ file: Naslovna.jsx:22 ~ NaslovnaSlike ~ imgIndex",
          imgIndex
        );
        imgIndex !== textMOD
          ? nasSlike.push(
              <div key={imgIndex}>
                <img
                  style={{
                    position: "absolute",
                    left: (i * props.screenWidth) / (3 + desk),
                    top: (e * props.screenWidth) / (3 + desk) + 35,
                    maxWidth: props.screenWidth / (3 + desk),
                  }}
                  src={`./assets/naslovna/${imgIndex}.png`}
                />
              </div>
            )
          : nasSlike.push(
              <div>
                key={imgIndex}
                <img
                  style={{
                    position: "absolute",
                    left: (i * props.screenWidth) / (3 + desk),
                    top: (e * props.screenWidth) / (3 + desk) + 35,
                    maxWidth: props.screenWidth / (3 + desk),
                  }}
                  src={`./assets/naslovna/${21}.png`}
                />
                <div
                  style={{
                    position: "absolute",
                    left: (i * props.screenWidth) / (3 + desk),
                    top: "100px",
                  }}
                >
                  {/* <TypeText /> */}
                  <div
                    style={{
                      textAlign: "left !important",
                      position: "absolute",
                      top: "-50px",
                      left: "-60px",
                    }}
                  >
                    <Type />
                  </div>
                </div>
              </div>
            );
        imgIndex++;
      }
    }
  }
  if (run === 1) {
    NaslovnaSlike();
    run++;
  } else {
    run++;
  }

  return <div id="naslovna">{nasSlike}</div>;
}

export default Naslovna;
