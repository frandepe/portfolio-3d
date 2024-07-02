import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text3D,
  OrbitControls,
  CameraShake,
} from "@react-three/drei";
import Astronaut from "./Astronaut";
import { useState } from "react";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));

  return (
    <CameraShake
      maxYaw={0.0}
      maxPitch={0.0}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
}

export const TextAnimation = () => {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Scene />
      <axesHelper
        scale={2}
        position={[0, 0, 0]}
        onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Rig />
    </Canvas>
  );
};

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  const gradientTexture = useTexture("/imgs/fondo-humo3.jpg");
  const desktop = "(max-width: 600px)";
  const isDesktop = useMediaQuery(desktop);
  const sizeText3D = isDesktop ? 1 : 1.4;
  const textCenter = isDesktop ? 3 : -1;
  const positionText = isDesktop ? -1 : 0;
  return (
    <>
      <Center
        bottom
        right
        position={[-width / 2 + margin, height / 2 - margin, 0]}
      >
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          frontend
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          developer
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center rotation={[-0.5, -0.25, 0]} position={[positionText, 0, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.6}
          letterSpacing={-0.05}
          size={sizeText3D}
          font="/Inter_Bold.json"
        >
          {`Franco\nDe Paulo`}
          <meshStandardMaterial map={gradientTexture} />
        </Text3D>
        <Center position={[textCenter, 0, 0]}>
          <Astronaut position={[0, 0, 3]} />
        </Center>
      </Center>
    </>
  );
}
