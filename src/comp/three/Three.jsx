import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import MyText from "./Text";
import { useState } from "react";

// const hintTextStyle = {
//   position: "fixed",
//   bottom: 20,
//   left: "50%",
//   color: "white",
//   fontFamily: "sans-serif",
//   fontSize: 12,
//   transform: "translateX(-50%)",
// };

export default function Three(props) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: props.marginTop,
          width: "25vw",
          height: window.innerWidth / 4,
        }}
      >
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15] }}>
          {/* <color attach="background" args={["#232323"]} /> */}
          <OrbitControls makeDefault maxDistance={40} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="yellow" />
          <Suspense fallback={null}>
            <MyText />
            {/* <Particles /> */}
          </Suspense>
        </Canvas>
      </div>
      {/* <p style={hintTextStyle}>Use Cmd or Ctrl to drag around</p> */}
    </>
  );
}
