import React, { useRef, useEffect } from 'react';
import PlaneScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && actions['Take 001']) {
      if (isRotating) {
        actions['Take 001'].play();
      } else {
        actions['Take 001'].stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} ref={ref} />
    </mesh>
  );
};

export default Plane;
