import "./TypeText.css";

const text = [
  "- PLINSKE INSTALACIJE",
  "- CENTRALNO GRIJANJE",
  "- VODOVOD I ODVOD",
  "- DIZALICE TOPLINE",
  "- SOLARNI SUSTAVI",
  "- KLIMATIZACIJA",
];
let wordIndex = 0;
let index = 0;
let senEnd = false;

setTimeout(() => {
  Type();
}, 500);

let olText = "";
function Type() {
  let el = document.getElementById("typetext");

  let nextL = (el.innerHTML =
    text[wordIndex][index] === undefined
      ? olText
      : olText + text[wordIndex][index]);

  if (text[wordIndex].length <= index) {
    // document.getElementById("typetext").innerHTML = "";
    // el.innerHTML = "";
    el.innerHTML += "\n";
    index = -1;

    console.log("🚀 ~ file: TypeText.jsx:22 ~ Type ~ text.length", text.length);
    wordIndex++;

    if (wordIndex === text.length) {
      // setTimeout(() => {
      //   el.innerHTML = "";
      // }, 1000);

      wordIndex = 0;
      senEnd = true;
      console.log("🚀 ~ file: TypeText.jsx:26 ~ Type ~ wordIndex", wordIndex);
    }
  }

  if (senEnd !== true) {
    setTimeout(() => {
      Type();
    }, 50);
  } else {
    CleartText(() => {
      Type();
    }, 2000);
  }
  if (senEnd === true) {
    senEnd = false;
  }
  index++;
  olText = el.innerHTML;
}

function CleartText() {
  let el = document.getElementById("typetext");
  setTimeout(() => {
    el.innerHTML = "";
  }, 1000);
  setTimeout(() => {
    RestartType();
  }, 1500);
}

function RestartType() {
  el.innerHTML = "";
  setTimeout(() => {
    Type();
  }, 1500);
}

function TypeText() {
  return (
    <div
      id="typetext"
      style={{ fontSize: "300%", color: "rgb(215, 255, 0)", textAlign: "left" }}
    >
      <span className="blinking-cursor">|</span>
    </div>
  );
}

export default TypeText;
