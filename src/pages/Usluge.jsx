import Slika from "../comp/Slika";
import "./Grid.css";

function Usluge(props) {
  return (
    <div
      id="usluge"
      style={{
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        fontSize: "3vmin",
        // backgroundColor: "black",
        height: "100%",
        width: "100%",
        padding: 0,
      }}
    >
      <div
        style={{
          marginTop: props.marginTop + 20,
          color: "rgb(215,255,0)",
          backgroundColor: "rgba(30,30,30,0",
        }}
      >
        <div className="grid-container-usluge">
          <div className="grid-item">
            Plinske Instalacije
            <br></br>
            <img
              style={{
                maxWidth: props.screenWidth / 2.1,
                maxHeight: props.screenWidth,
              }}
              src={"./assets/usluge/plin.png"}
            />
          </div>
          <div className="grid-item">
            Centralno Grijanje
            <br></br>
            <img
              style={{
                maxWidth: props.screenWidth / 2.1,
                maxHeight: props.screenWidth,
              }}
              src={"./assets/usluge/centralno.png"}
            />
          </div>
          <div className="grid-item">
            Vodovod i Odvod
            <br></br>
            <img
              style={{
                maxWidth: props.screenWidth / 2.1,
                maxHeight: props.screenWidth,
              }}
              src={"./assets/usluge/vodovod.png"}
            />
          </div>
          <div className="grid-item">
            Dizalice Topline
            <br></br>
            <img
              style={{
                maxWidth: props.screenWidth / 2.1,
                maxHeight: props.screenWidth,
              }}
              src={"./assets/usluge/toplina.png"}
            />
          </div>
          <div className="grid-item">
            Solarni Sustavi
            <br></br>
            <img
              style={{
                maxWidth: props.screenWidth / 2.1,
                maxHeight: props.screenWidth,
              }}
              src={"./assets/usluge/solar.png"}
            />
          </div>
          <div className="grid-item">
            Klimatizacija
            <br></br>
            <img
              style={{
                maxWidth: props.screenWidth / 2.1,
                maxHeight: props.screenWidth,
              }}
              src={"./assets/usluge/klima.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usluge;

{
  /* <div className="grid-item">Spajanje kotlovnica</div>
<div className="grid-item">Izrada instalacija kupaonica</div>
<div className="grid-item">Izrada plinske instalacije</div>
<div className="grid-item">Grijanje, vodovod, klimatizacija</div>
<div className="grid-item">Završna montaža sanitarija</div>
<div className="grid-item">Ugradnja vodnih pumpi i crpki</div>
<div className="grid-item">Solarni sustavi, podna grijanja</div> */
}
