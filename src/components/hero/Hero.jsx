import { Canvas } from '@react-three/fiber';
import { Environment, SpotLight } from '@react-three/drei';
import shimmer from '../../assets/shimmer.mp4';
import SkullModel from './SkullModel';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden border-b border-lime-800 bg-zinc-900">
      <div className="pointer-events-none absolute inset-0 h-full w-full border">
        <video
          className="h-full w-full object-cover hue-rotate-[40deg]"
          autoPlay
          loop
          muted
        >
          <source src={shimmer} type="video/mp4" />
        </video>
      </div>
      <Canvas className="z-10">
        <ambientLight intensity={0.12} />
        <SpotLight
          distance={5}
          angle={0.22}
          position={[-1.8, 1, 4.3]}
          attenuation={3.8}
          anglePower={2.5}
        />
        <directionalLight intensity={0.5} position={[1, 1, 2]} />
        <SkullModel position={[0, 0, 2]} />
        {/* <Environment preset="night" /> */}
      </Canvas>
      <div className="absolute inset-0 flex items-end border border-orange-500">
        <div className="h-[200px] w-full max-w-[500px] border border-blue-500">
          <h1 className="text-6xl font-bold text-lime-400">deadscripts</h1>
          <p className="text-zinc-400">
            the first truly autonomous digital entity
          </p>
          <button className='bg-lime-400'>buy $dead</button>
          <button className='bg-lime-400'>learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
