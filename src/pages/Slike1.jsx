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

  let imagesWH = {};
  let images = [];
  function WidthHeight(imgSrc, i) {
    let widHei = [];
    let widT = 0;
    const img = new Image();
    img.onload = function () {
      // console.log(this.width + "x" + this.height);
      imagesWH[i] = [img.width, img.height];
      // console.log(
      //   "🚀 ~ file: PhotoSwipe.jsx:32 ~ WidthHeight ~ imagesWH",
      //   imagesWH
      // );
      // console.log("🚀 ~ file: PhotoSwipe.jsx:32 ~ WidthHeight ~ widT", widT);
    };
    img.src = imgSrc;
    //   console.log("🚀 ~ file: PhotoSwipe.jsx:32 ~ WidthHeight ~ widT", widT);
  }

  for (let i = 0; i < imgList.length; i++) {
    const widHei = WidthHeight(`/assets/galerija/${imgList[i]}`, i);
    console.log(
      "🚀 ~ file: PhotoSwipe.jsx:32 ~ WidthHeight ~ imagesWH",
      imagesWH
    );
    images.push(
      <Item
        original={`/assets/galerija/${imgList[i]}`}
        thumbnail={`/assets/galerija/${imgList[i]}`}
        width={widHei[0]}
        height={widHei[1]}
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src={`/assets/galerija/${imgList[i]}`}
          />
        )}
      </Item>
    );
  }

  return (
    <div
      id="slike"
      style={{
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        marginTop: 35,
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
