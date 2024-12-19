import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useAnimation } from 'framer-motion';

const SkullModel = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/models/scene.gltf');
  const targetPosition = useRef([0, 0, 0]);
  const controlsAnimation = useAnimation();

  useEffect(() => {
    controlsAnimation.start({
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    });
  }, [controlsAnimation]);

  useFrame(({ mouse, viewport }) => {
    const x = -(mouse.x * viewport.width) / 10;
    const y = -(mouse.y * viewport.height) / 10;
    targetPosition.current = [x, y, 5];

    // linear interpolation to smooth rotation transition
    ref.current.rotation.x +=
      (targetPosition.current[1] - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y +=
      (-targetPosition.current[0] - ref.current.rotation.y) * 0.04;
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={nodes.Cube_0.material}
        >
          <meshStandardMaterial color="yellowgreen" metalness={4} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={nodes.Cube001_0.material}
        >
          <meshStandardMaterial color="yellowgreen" metalness={4} />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload('/models/scene.gltf');

export default SkullModel;
