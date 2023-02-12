import { useState } from "react";
import Slika from "../comp/Slika";
import "./Grid.css";

const imgList = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
];

let images = [];
let checkRun = 0;

function Slike(props) {
  const [slike, setSlike] = useState([]);

  function imageExists(url) {
    return new Promise((resolve) => {
      var img = new Image();
      img.addEventListener("load", () => resolve(true));
      img.addEventListener("error", () => resolve(false));
      img.src = url;
    });
  }

  if (checkRun < 1) {
    images = [];
    let index = 1;
    let checkImg = false;

    LoadImgs();
    function LoadImgs() {
      // for (let i = 0; i < imgList.length; i++) {
      images.push(
        <div key={index} className="grid-item">
          <Slika
            screenWidth={props.screenWidth}
            img={`./assets/img/${imgList[index]}`}
          />
        </div>
      );
      const url = `/assets/img/${index + 2}.png`;
      imageExists(url).then((ok) => (checkImg = ok));
      setTimeout(() => {
        // console.log("🚀 ~ file: Slike.jsx:50 ~ LoadImgs ~ checkImg", checkImg);
        if (checkImg === true) {
          LoadImgs();
          index++;
        }
      }, 50);
    }

    checkRun++;
  }

  setTimeout(() => ImageRdy(), 2500);
  function ImageRdy() {
    setSlike(images);
    // console.log("🚀 ~ file: Slike.jsx:63 ~ setTimeout ~ images", images);
    // console.log("🚀 ~ file: Slike.jsx:63 ~ setTimeout ~ slike", slike);
  }

  return (
    <div
      id="slike"
      style={{
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        marginTop: "100px",
      }}
    >
      <div className="grid-container">
        {/* <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/16.jpg"} />
        </div> */}
        {slike}
      </div>
    </div>
  );
}

export default Slike;
