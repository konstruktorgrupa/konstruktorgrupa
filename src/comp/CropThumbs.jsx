let x = document.createElement("canvas");
x.width = 184;
x.height = 184;
x.id = "canvas";
x.style.position = "absolute";
x.style.left = 0;
x.style.top = "36px";
document.body.appendChild(x);

export default function CropThumbs() {
  return (
    <div>
      {/* <canvas id="canvas"></canvas> */}
      <div>
        {/* <button
          style={{ position: "absolute", top: "100px", left: "100px" }}
          className="download"
        >
          Download Image
        </button> */}
      </div>
    </div>
  );
}

setTimeout(() => CropImages(), 1500);

function CropImages() {
  cropImage(`./assets/logos/bitmap.png`, 194, 194, 184, 184);
}

let index = 34;
let indexDel = 34;
let indexLoop = 0;
let widthP = 0;

//draw the image on first load
// setTimeout(() => cropImage(img, 194, 194, 184, 184), 1500);

//crop the image and draw it to the canvas
function cropImage(imagePath, newX, newY, newWidth, newHeight) {
  //   imagePath.onload = function () {
  //create an image object from the path
  const originalImage = new Image();
  originalImage.src = imagePath;

  //initialize the canvas object
  // const canvas = document.getElementById("canvas");
  // var newCanvas =

  const ctx = canvas.getContext("2d");

  //wait for the image to finish loading
  originalImage.addEventListener("load", function () {
    setTimeout(() => {
      //set the canvas size to the new width and height
      canvas.width = newWidth;
      canvas.height = newHeight;

      //draw the image
      ctx.drawImage(
        originalImage,
        newX,
        newY,
        newWidth,
        newHeight,
        0,
        0,
        newWidth,
        newHeight
      );

      //find the input elements in the html
      const downloadBtn = document.querySelector("button.download");

      //bind a click listener to the download button
      // downloadBtn.addEventListener("click", function () {
      //create a temporary link for the download item
      let tempLink = document.createElement("a");

      let fileName;
      //generate a new filename
      // if (indexDel === 116 || indexDel === 41) {
      //   fileName = "delete";
      // } else {
      //   fileName = `${index}.png`;
      //   index--;
      // }

      fileName = "delete";
      fileName = `${index}.png`;
      index--;

      indexDel--;

      //configure the link to download the resized image
      tempLink.download = fileName;
      tempLink.href = document
        .getElementById("canvas")
        .toDataURL("image/jpeg", 0.9);

      //trigger a click on the link to start the download
      tempLink.click();

      const roundH = Math.floor(indexLoop / 6);

      if (indexLoop <= 35) {
        console.log("🚀 ~ file: CropThumbs.jsx:100 ~ indexLoop", indexLoop);
        cropImage(
          `./assets/logos/sprite6.png`,
          widthP * 194 + 2,
          roundH * 194 + 2,
          178,
          178
        );
        indexLoop++;

        if (widthP < 5) {
          widthP++;
        } else {
          widthP = 0;
        }
      }
    }, 100);
  });

  //   };
}
