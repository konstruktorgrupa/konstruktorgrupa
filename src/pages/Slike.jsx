import { useState } from "react";
import Slika from "../comp/Slika";
import "./Grid.css";

const imgList = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "20.PNG",
  "30.PNG",
];

let images = [];
let checkRun = false;

function Slike(props) {
  if (checkRun === false) {
    for (let i = 0; i < imgList.length; i++) {
      images.push(
        <div className="grid-item">
          <Slika
            screenWidth={props.screenWidth}
            img={`/assets/img/${imgList[i]}`}
          />
        </div>
      );
    }
    checkRun = true;
  }

  console.log("🚀 ~ file: Slike.jsx:30 ~ images", images);
  return (
    <div
      id="slike"
      style={{
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        marginTop: "300px",
      }}
    >
      <div className="grid-container">
        {/* <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"/assets/img/20.PNG"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/30.PNG"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/3.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/4.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/5.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/6.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/7.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/8.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/9.jpg"} />
        </div>
        <div className="grid-item">
          <Slika screenWidth={props.screenWidth} img={"./assets/img/10.jpg"} />
        </div> */}

        {images}
      </div>
    </div>
  );
}

export default Slike;
