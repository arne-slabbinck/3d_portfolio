// 3js react-three fibre canvas


import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";   // empty canvas to place something on it

//helpers to draw on canvas
// useGLTF allow us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CannvasLoader from '../Loader';

const Computers = () => {
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
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
       />

       {/* Needs to be loaded in our canvas, so create canvas */}

    </mesh>
  )
}

const ComputersCanvas = () => {
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
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <Suspense>
        <OrbitControls 
          enableZoom={false}
          // so we are limited in the movement angles: max/min polar angle
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
          />

        {/* Finally render the computer model componennt */}
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas