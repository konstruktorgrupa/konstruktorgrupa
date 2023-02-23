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
          fontSize: "0.7vmin",
        }}
      >
        <h1>
          Zahvaljujući našoj dugogodišnjoj tradiciji i iskustvu u radu sa svim
          vrstama instalacija. Naši stručnjaci su osposobljeni za obavljanje
          svih vrsta radova, od manjih popravaka do većih projekata koji
          uključuju postavljanje kompletnih sustava u novim ili postojećim
          objektima.
          <br></br>
          <br></br>
          Kada radimo na vašem projektu, koristimo najbolje materijale i alate
          kako bismo osigurali dugotrajnost i pouzdanost vaših instalacija.
          Svakom projektu pristupamo individualno, pa su svi naši radovi
          prilagođeni vašim potrebama i željama.
          <br></br> <br></br>
          Naša usluga ne staje nakon instalacije sustava, jer vam također nudimo
          redovito održavanje i servisiranje vaših sustava kako bi osigurali
          njihovu optimalnu funkcionalnost i pouzdanost. Naši stručnjaci će brzo
          i efikasno otkloniti sve probleme ili kvarove koji se mogu pojaviti.
          <br></br> <br></br>
          Kao vodeći stručnjaci u našoj industriji, uvijek smo u koraku s
          najnovijim trendovima i tehnologijama u industriji. Naša stručnost i
          iskustvo omogućuju nam da brzo i efikasno riješimo sve vaše probleme i
          odgovorimo na sve vaše potrebe.
          <br></br> <br></br>
          Naša misija je pružiti klijentima najbolje moguće rješenje za njihove
          potrebe uz najbolju vrijednost za njihov novac. Stalno radimo na
          poboljšanju i unaprjeđenju naših usluga kako bi se osigurala najbolja
          moguća kvaliteta za naše klijente.
          <br></br>
          <br></br>
          Ako imate bilo kakvih pitanja ili trebate bilo kakve usluge u vezi s
          instalacijama, slobodno nas kontaktirajte. Naši stručnjaci će vam
          pružiti potrebne informacije i pomoći vam pronaći rješenje koje
          najbolje odgovara vašim potrebama.
          <br></br>
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
