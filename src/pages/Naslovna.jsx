import "./Grid.css";

function Naslovna(props) {
  let desk = props.screenWidth > props.screenHeight ? 1 : 0;
  let mob = props.screenWidth < props.screenHeight ? 1 : 0;

  console.log(
    "🚀 ~ file: Naslovna.jsx:36 ~ Naslovna ~ props.screenWidth",
    props.screenWidth / 5
  );

  let nasSlike = [];
  function NaslovnaSlike() {
    let imgIndex = 0;
    for (let i = 0; i < 3 + desk; i++) {
      for (let e = 0; e < 3 + mob; e++) {
        console.log("🚀 ~ file: Naslovna.jsx:18 ~ NaslovnaSlike ~ e ", e);
        nasSlike.push(
          <img
            key={imgIndex}
            style={{
              position: "absolute",
              left: (i * props.screenWidth) / (3 + desk),
              top: (e * props.screenWidth) / (3 + desk) + 35,
              maxWidth: props.screenWidth / (3 + desk),
            }}
            src={`./assets/naslovna/${imgIndex === 12 ? 20 : imgIndex}.png`}
          />
        );
        imgIndex++;
      }
    }
    console.log("🚀 ~ file: Naslovna.jsx:76 ~ Naslovna ~ nasSlike", nasSlike);
  }
  NaslovnaSlike();

  return <div id="naslovna">{nasSlike}</div>;
}

export default Naslovna;
