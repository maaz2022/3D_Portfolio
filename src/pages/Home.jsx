import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Loader from '../component/Loader';
import Island from '../Models/Island';
import Sky from '../Models/Sky';
import Bird from '../Models/Bird';
import Plane from '../Models/Plane';
import HomeInfo from './HomeInfo';



const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);


  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition]; 
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition,rotation];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition, islandrotation] = adjustIslandForScreenSize();

  useEffect(() => {
    const handleResize = () => {
      setIslandConfig(adjustIslandForScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/> }
      </div>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Bird/>
          <Sky
          isRotating={isRotating}
          />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandrotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
          isRotating={isRotating}
          planeScale={biplaneScale}   
          planePosition={biplanePosition}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
