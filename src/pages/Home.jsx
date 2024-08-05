import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Loader from '../component/Loader';
import Island from '../Models/Island';
import Sky from '../Models/Sky';
import Bird from '../Models/Bird';
import Plane from '../Models/Plane';



const Home = () => {
  const [isRotating, setISRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return { screenScale, screenPosition, rotation };
  };

  const adjustIPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, 0];
    }
    return { screenScale, screenPosition };
  };

  const [islandConfig, setIslandConfig] = useState(adjustIslandForScreenSize());
  const [planeScale, planePosition] = useState(adjustIPlaneForScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setIslandConfig(adjustIslandForScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { screenScale, screenPosition, rotation } = islandConfig;

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Bird/>
          <Sky/>
          <Island 
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}

          />
          <Plane
          isRotating={isRotating}
          planeScale={planeScale}
          planePosition={planePosition}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
