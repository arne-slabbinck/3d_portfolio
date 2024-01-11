import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader';



const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    // The Ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow recieveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygoneOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]} // mirror horizontally
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"

      // gl needs to be there to properly render
      gl={{ preserveDrawingBuffer: true}}
    >

      {/* Suspense is from react, allows us to have a loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls 
          enableZoom={false}
          />

        {/* Finally render the ball componennt */}

        <Ball imgUrl={icon} />

      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas