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
      <Canvas dpr={[1, 2]} camera={{ position: [-5, 0, 15] }}>
        {/* <color attach="background" args={["#232323"]} /> */}
        {/* <OrbitControls makeDefault maxDistance={40} /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#d7ff00" />
        <Suspense fallback={null}>
          <MyText />
          {/* <Particles /> */}
        </Suspense>
      </Canvas>

      {/* <p style={hintTextStyle}>Use Cmd or Ctrl to drag around</p> */}
    </>
  );
}
