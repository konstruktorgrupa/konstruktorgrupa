function Naslovna(props) {
  let deskOrMob =
    props.screenWidth > props.screenHeight
      ? "./assets/naslovna/naslovnaDesk.svg"
      : "./assets/naslovna/naslovnaMob.svg";
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
          src={deskOrMob}
        />
      </div>
    </div>
  );
}

export default Naslovna;
