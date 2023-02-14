import { useState } from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

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

const imageWH2 = {
  0: [1076, 607],
  1: [1759, 1060],
  2: [726, 1016],
  3: [985, 1318],
  4: [1763, 1322],
  5: [990, 1324],
  6: [991, 1324],
  7: [1766, 1322],
  8: [1763, 1323],
  9: [609, 1314],
  10: [989, 1318],
  11: [714, 1234],
  12: [1315, 877],
  13: [1743, 970],
  14: [1675, 839],
};

let imagesWH = {};
let images = [];
function WidthHeight(imgSrc, i) {
  const img = new Image();
  img.onload = function () {
    // console.log(this.width + "x" + this.height);
    imagesWH[i] = [img.width, img.height];
    console.log(
      "🚀 ~ file: PhotoSwipe.jsx:32 ~ WidthHeight ~ imagesWH",
      imagesWH
    );
  };
  img.src = imgSrc;
  return widHei;
}

for (let i = 0; i < imgList.length; i++) {
  //   const widHei = WidthHeight(`/assets/galerija/${imgList[i]}`, i);

  images.push(
    <Item
      original={`/assets/galerija/${imgList[i]}`}
      thumbnail={`/assets/thumb/${imgList[i]}`}
      width={imageWH2[i][0]}
      height={imageWH2[i][1]}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={`/assets/thumb/${imgList[2]}`} />
      )}
    </Item>
  );
}

export const MyGallery = () => <Gallery>{images}</Gallery>;

[0].naturalHeight;
