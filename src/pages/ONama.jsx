import ONamaAni from "../comp/ONamaAni";

function ONama(props) {
  console.log(
    "🚀 ~ file: ONama.jsx:16 ~ ONama ~ props.MarginTop",
    props.marginTop
  );
  return (
    <div id="onama" style={{ display: "none", left: 0 }}>
      <div style={{ zIndex: "0 !important" }}>
        <ONamaAni
          screenWidth={props.screenWidth}
          screenHeight={props.screenHeight}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: props.marginTop * 2,

          // left: 10,
          // margin: "auto",
          left: 0,
          right: 0,
          width: "80%",
          // border: "3px solid green",
          // padding: "10px",
          zIndex: "10 !important",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1>
          Naša firma se specijalizira za uvođenje instalacija vodovoda,
          kanalizacije, plina te instalacija za grijanje i klimatizaciju.
          <br></br>
          Naš stručni tim pruža kvalitetne usluge, a naši iskusni stručnjaci
          koriste najnoviju tehnologiju i materijale kako bi osigurali sigurnost
          i pouzdanost vaših instalacija.
          <br></br> <br></br>
          Pružamo usluge za različite vrste objekata, bilo da se radi o
          privatnim kućama, poslovnim prostorima ili industrijskim objektima.
          <br></br>
          Naš cilj je osigurati da vaši sustavi rade učinkovito i pouzdano kako
          bi vaša svakodnevica bila ugodna i udobna.
          <br></br>
          <br></br>
          RADNO VRIJEME
          <br></br>
          ponedjeljak 08:00 – 16:00
          <br></br>
          utorak 08:00 – 16:00
          <br></br>
          srijeda 08:00 – 16:00
          <br></br>
          četvrtak 08:00 – 16:00
          <br></br>
          petak 08:00 – 16:00
          <br></br>
          subota ZATVORENO
          <br></br>
          nedjelja ZATVORENO
        </h1>
      </div>
    </div>
  );
}

export default ONama;
