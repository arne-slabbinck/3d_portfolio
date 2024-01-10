// 3js react-three fibre canvas


import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";   // empty canvas to place something on it

//helpers to draw on canvas
// useGLTF allow us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  // import GLTF model
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    // mesh
    <mesh>
      {/* Create light so we can see anything */}
      <hemisphereLight intensity={1}
       groundColor="black" />

       {/* Pointlight for glare on computerscreen */}
       <pointLight intensity={1} />

       <spotLight 
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow 
          shadow-mapSize={1024}
       />

       {/* Self closing component wich we can pass the 3D object to */}
       <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
       />

       {/* Needs to be loaded in our canvas, so create canvas */}

    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  //The thing this useEffect is doing is changing the isMobile variable

  useEffect(() => {
    // Add a listener for changes to the screen
    
    // Check if we are on mobile device
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // if the media query matches max width 500px then we know it is on mobile device 
    // we set true to isMobile
      
    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    

    // Define a callback function nto handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

      // Since we are in react and withinn the useEffect we have to add eventlistener and remove it
      // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);

    // Remove the listener when the component is unmounted

    return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
    
  }, [])

  

  return (
    <Canvas
      frameloop="demand"
      shadows 
      // Camera most important part of the scene
      camera={{ position: [20, 3, 5], fov: 25}}
      // gl needs to be there to properly render the desk
      gl={{ preserveDrawingBuffer: true}}
    >

      {/* Suspense is from react, allows us to have a loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>
      {/* <Suspense> */}
        <OrbitControls 
          enableZoom={false}
          // so we are limited in the movement angles: max/min polar angle
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
          />

        {/* Finally render the computer model componennt */}
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas