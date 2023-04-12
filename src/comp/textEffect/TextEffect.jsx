import "./TextEffect.css";

export default function TextEffect(props) {
  const text = `     
  - PLINSKE INSTALACIJE
  - CENTRALNO GRIJANJE
  - VODOVOD I ODVOD
  - DIZALICE TOPLINE
  - SOLARNI SUSTAVI
  - KLIMATIZACIJA
`;

  const start = `<p>`;
  const end = `</p>`;
  let index = 0;
  let typeText = "";
  let cursor = "|";
  let curIndex = 0;
  function Type() {
    if (text[index] === "-") {
      typeText += "<br/>";
    }
    typeText += text[index];

    if (curIndex >= 5) {
      console.log("🚀 ~ file: TextEffect.jsx:27 ~ Type ~ curIndex", curIndex);
      if (cursor === "|") {
        cursor = "";
        curIndex = 0;
      } else {
        cursor = "|";
      }
    }
    curIndex++;
    console.log("🚀 ~ file: TextEffect.jsx:27 ~ Type ~ curIndex 2", curIndex);

    document.getElementsByClassName("coolShadow")[0].innerHTML =
      start + typeText + cursor + end;

    index++;
    if (index < text.length) {
      setTimeout(() => {
        Type();
      }, 100);
    }
  }
  setTimeout(() => {
    Type();
  }, 200);
  return (
    <div className="coolShadow">
    </div>
  );
}
{
  /* <p>- PLINSKE INSTALACIJE</p>
<p>- CENTRALNO GRIJANJE</p> */
}
