import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../components/Model';
import keycaseUrl from '../assets/keycase.stl';
import keyplateUrl from '../assets/keyplate.stl';
import { Link } from 'react-router-dom';
import Github from './Github'
import './App.css'
export default function AssemblyViewer() {
  return (
    <div className="w-full h-screen bg-slate-950 relative text-slate-100">
      <nav className="absolute top-0 w-full p-6 z-10 flex justify-between items-center bg-slate-900/60 backdrop-blur-md border-b border-slate-800">
        <h2 className="text-xl font-semibold tracking-tight">Assembly</h2>
        <h3 className='text-lg font-bold'>25mm x 49mm x 49mm</h3>
        <Link to="/" className="text-slate-400 hover:text-white transition duration-200">← Back to Director</Link>
      </nav>
      <Canvas camera={{ position: [50, 50, 50], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <group>
          {/* Attempting to lay both flat (-90 deg on X) and align at [0,0,0] */}
          <Model url={keycaseUrl} color="orange" position={[0, 0, 0]} rotation={[-90, 0, 0]} />
          <Model url={keyplateUrl} color="blue" position={[0, -28, -28]} rotation={[-90, 0, 0]} /> 
        </group>
        <OrbitControls makeDefault />
      </Canvas>
      <Github profileURL={"https://github.com/bruzz-bruzz"} repoURL={"https://github.com/bruzz-bruzz/arduino-macropad"}/>
    </div>
  );
}
