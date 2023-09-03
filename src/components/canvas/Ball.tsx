import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import CanvasLoader from '../Loader';

type Ball = {
  imgUrl: string;
};

const Ball = (props: Ball) => {
  const [decal] = useTexture([props.imgUrl]);
  return <Float speed={1.75} rotationIntensity={1} floatIntensity={2}></Float>;
};

const BallCanvas = ({ icon }: { icon: any }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
