import "./Canvas.css";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function CanvasElm() {
  const basicParticles = () => {
    const points = useRef(null!);
    return (
      <points position={[0, 0, 0]} ref={points}>
        <icosahedronGeometry args={[1.5, 6]} />
        <pointsMaterial color="#f2f2f2" size={0.0225} sizeAttenuation />
      </points>
    );
  };
  return (
    <div id="canvas-container">
      <Canvas id="webgl">
        <ambientLight intensity={0.5} />
        {basicParticles()}
        <OrbitControls target={[0, 0, 0]} autoRotate />
      </Canvas>
    </div>
  );
}

export default CanvasElm;
