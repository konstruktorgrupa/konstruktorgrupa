import "./Grid.css";

import "../type/Type.css";
import Type from "../type/Type";

// import TypeText from "../comp/TypeText.jsx";

let run = 0;
function Naslovna(props) {
  let desk = props.screenWidth > props.screenHeight ? 1 : -1;
  let mob = props.screenWidth < props.screenHeight ? 1 : 0;

  let textMOD = props.screenWidth > props.screenHeight ? 9 : 4;

  const vmin =
    window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth;

  const vhv = Math.round(vmin / 100);

  function vhToPixels(vh) {
    return Math.round((vmin / (100 / vh)) * 3);
  }
  const marginTop = vhToPixels(vhv);

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
                  top: (e * props.screenWidth) / (3 + desk) + marginTop / 1.73,

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
                  top: (e * props.screenWidth) / (3 + desk) + marginTop / 1.73,
                  maxWidth: props.screenWidth / (3 + desk),
                }}
                src={`./assets/naslovna/${21}.png`}
              />
              <div
                style={{
                  position: "absolute",
                  left:
                    (i * props.screenWidth) / (3 + desk) -
                    (i * props.screenWidth) / (3 + desk) / 20,
                  top: "36px",
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
  // NaslovnaSlike();//   run++;
  // } else {
  //   run++;
  // }

  return (
    <div id="naslovna">
      <img
        style={{
          position: "absolute",
          left: 0,
          top: props.marginTop,
          width: "100%",
        }}
        src={
          window.innerWidth > window.innerHeight
            ? `./assets/naslovna/desk1.png`
            : `./assets/naslovna/mobile2.png`
        }
      />
      <div
        style={{
          position: "absolute",
          left:
            window.innerWidth > window.innerHeight
              ? (window.innerWidth / 4) * 3 - window.innerWidth / 4 / 8
              : window.innerWidth / 2 - window.innerWidth / 4 / 8,

          top: props.marginTop * 2,
          fontSize: window.innerWidth > window.innerHeight ? "3vmin" : "2vmin",
        }}
      >
        <Type />
      </div>
    </div>
  );
}

export default Naslovna;
