import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Jobs } from "./Jobs";
import Astronaut2 from "../../../public/astronaut/Astronaut2";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export const Animation = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Jobs />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Suspense fallback={null}>
            <Astronaut2
              position={[1, -2, -2]}
              rotation={[0, -Math.PI / 4, 0]}
            />
          </Suspense>
          <Environment preset="night" />
        </ScrollControls>
      </Canvas>
    </>
  );
};

// Modificar el tamaño del pez:
// 1 - Vamos a Fish.tsx
// 2 - Ajustamos todos los valores de scale={30} al numero que queramos
// Cada etiqueta group tiene un scale, hay q modificarlos todos.
// Ej:
// <group
// name="finPelvicB"
// rotation={[-Math.PI / 2, 0, 0]}
// scale={30}
// />
