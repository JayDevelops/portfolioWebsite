import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

// TODO: Ball to create the 3D from passed Props
const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

// Render the Ball Canvas and export to the app
const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      {/* In case the 3D object doesn't render quickly, it will fall back to a canvas loader from react*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* Adds specific controls to move the object, doesn't let it move left and right to polar angles*/}
        <OrbitControls enableZoom={false} />
        {/* Send the state effect as a property in Computers, handle it there*/}
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
