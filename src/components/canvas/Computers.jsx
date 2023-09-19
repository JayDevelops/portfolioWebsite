import React, {Suspense, useEffect, useState} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF, SpotLight, useDepthBuffer} from "@react-three/drei";

import CanvasLoader from "../Loader";
import {Vector3} from "three";
import {GLTFLoader} from "three-stdlib";

//  Computers scene changes when mobile, pass isMobile as a prop
const Computers = (isMobile) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
      <mesh>
          <hemisphereLight intensity={ Math.PI / 3 } groundColor="red" />
          <pointLight intensity={1} />
          <spotLight
              position={[-20, 50, 10]}
              angle={Math.PI / 3}
              penumbra={1}
              intensity={5}
              castShadow
              shadow-mapSize={1024}
              color="white"
          />
          <primitive
              object={computer.scene}
              scale={isMobile ? 0.63 : 0.75}
              position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
              rotation={[-0.01, -0.2, -0.1]}
          />
      </mesh>
  );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    // If we are on mobile devices less than 500px in width, set "IsMobile" to true.
    useEffect( () => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches); // Dynamically changes to true or false based above

        //  Change setter to the event, and now add the event listener to the media query
        const handleMediaChange = (event) => setIsMobile(event);
        mediaQuery.addEventListener('change', handleMediaChange);

        // Return the removed event listener when a new change has arised
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange)
        };
    })


  // Returns the Computers module to the web page with shadow and starting camera of x:30, y:3, and z:5. Shadows too
  return(
      <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          shadows
          camera={ {position: [20, 3, 5], fov: 25} }
          gl={ {preserveDrawingBuffer: true} }
      >
        {/* In case the 3D object doesn't render quickly, it will fall back to a canvas loader from react*/}
          <Suspense fallback={<CanvasLoader />} >
          {/* Adds specific controls to move the object, doesn't let it move left and right to polar angles*/}
              <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
              />
              {/* Send the state effect as a property in Computers, handle it there*/}
              <Computers isMobile={isMobile}/>
          </Suspense>
          <Preload all/>
      </Canvas>
  )
}
// // TODO: Create spotlight which moves according to mouse viewport width, passes properties
// const MovingSpot = (vec = new Vector3(), ...props) => {
//     const light = useRef();
//     const viewport = useThree((state) => state.viewport);
//
//     useFrame(state => {
//         let mouseState = state.mouse;
//         light.current.target.position.lerp(vec.set((mouseState.x * viewport.width) / 2, (mouseState.y * viewport.height) / 2, 0 ), 0.1);
//         light.current.target.updateMatrixWorld();
//     })
//
//     return <SpotLight
//         castShadow
//         ref={light}
//         penumbra={1}
//         distance={6}
//         angle={0.25}
//         attenuation={5}
//         anglePower={3}
//         intensity={2}
//         {...props}
//     />
// }

// // TODO: New code to show spotlight on computer scene
// const Scene = () => {
//     const depthBuffer = useDepthBuffer( {frames: 1});
//     const computer = useLoader(GLTFLoader, './desktop_pc/scene.gltf');
//     return(
//         <>
//             <MovingSpot depthBuffer={depthBuffer} color={"0c8cbf"} position={[3, 3, 2]} />
//             <MovingSpot depthBuffer={depthBuffer} color={"b003cf"} position={[1, 3, 0]} />
//             <mesh receiveShadow position={ [0, -1, 0] } rotation-x={ (-Math.PI / 2)} >
//                 <primitive
//                     object={computer}
//                     scale={0.70}
//                     position={[0, -3.30, -1.5]}
//                     rotation={[-0.01, -0.20, -0.10]}
//                 />
//             </mesh>
//         </>
// )
// }
// Below is the code for the computer scene desktop which is passed to ComputerCanvas
export default ComputerCanvas