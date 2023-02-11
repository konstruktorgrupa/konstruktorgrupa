import Slika from "../comp/Slika";
import "./Grid.css";

function Usluge() {
  return (
    <div
      id="usluge"
      style={{
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        fontSize: "20px",
        // backgroundColor: "black",
        height: "100%",
        width: "100%",
      }}
    >
      <div style={{ marginTop: "300px" }}>
        <div className="grid-container-usluge">
          <div className="grid-item">Spajanje kotlovnica</div>
          <div className="grid-item">Izrada instalacija kupaonica</div>
          <div className="grid-item">Izrada plinske instalacije</div>
          <div className="grid-item">Grijanje, vodovod, klimatizacija</div>
          <div className="grid-item">Završna montaža sanitarija</div>
          <div className="grid-item">Ugradnja vodnih pumpi i crpki</div>
          <div className="grid-item">Solarni sustavi, podna grijanja</div>
        </div>
      </div>
    </div>
  );
}

export default Usluge;
