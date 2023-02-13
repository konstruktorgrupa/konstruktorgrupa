// import "./TypeText.css";

// const text = [
// "- PLINSKE INSTALACIJE",
// "- CENTRALNO GRIJANJE",
// "- VODOVOD I ODVOD",
// "- DIZALICE TOPLINE",
// "- SOLARNI SUSTAVI",
// "- KLIMATIZACIJA",
// ];
// let wordIndex = 0;
// let index = 0;
// let senEnd = false;

// setTimeout(() => {
//   Type();
// }, 500);

// let cursor = 0;
// let olText = "";
// function Type() {
//   let el = document.getElementById("typetext");

//   let nextL = (el.innerHTML =
//     text[wordIndex][index] === undefined
//       ? olText
//       : olText + text[wordIndex][index]);

//   let elCur = document.getElementById("cursor");
//   if (cursor === 0) {
//     // elCur.innerHTML = "|";
//     cursor++;
//   } else {
//     // elCur.innerHTML = "";
//     cursor = 0;
//   }

//   if (text[wordIndex].length <= index) {
//     // document.getElementById("typetext").innerHTML = "";
//     // el.innerHTML = "";
//     el.innerHTML += "\n";
//     index = -1;

//     console.log("🚀 ~ file: TypeText.jsx:22 ~ Type ~ text.length", text.length);
//     wordIndex++;

//     if (wordIndex === text.length) {
//       el.innerHTML = "";
//       wordIndex = 0;
//       senEnd = true;
//       console.log("🚀 ~ file: TypeText.jsx:26 ~ Type ~ wordIndex", wordIndex);
//     }
//   }

//   setTimeout(
//     () => {
//       Type();
//     },
//     senEnd === true ? 1000 : 75
//   );
//   if (senEnd === true) {
//     senEnd = false;
//   }
//   index++;
//   olText = el.innerHTML;
// }

// function TypeText() {
//   return (
//     <div>
//       <div
//         id="typetext"
//         style={{
//           fontSize: "320%",
//           fontWeight: "bold",
//           color: "rgb(215, 255, 0)",
//           textAlign: "left",
//         }}
//       >
//         {/* <span
//           className="cursor"
//           style={{
//             fontSize: "320%",
//             fontWeight: "bold",
//             color: "rgb(215, 255, 0)",
//             textAlign: "left",
//           }}
//         ></span> */}
//         {/* <div
//           style={{
//             fontSize: "320%",
//             fontWeight: "bold",
//             color: "rgb(215, 255, 0)",
//             textAlign: "left",
//           }}
//           className="blinking-cursor"
//         >
//           |
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default TypeText;
