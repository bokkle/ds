import { Canvas } from '@react-three/fiber';
import { SpotLight } from '@react-three/drei';
import shimmer from '../../assets/shimmer.mp4';
import SkullModel from './SkullModel';

const Hero = () => {
  return (
    <section className="relative h-screen select-none overflow-hidden border-b border-lime-800 bg-zinc-900">
      <div className="pointer-events-none absolute inset-0 h-full w-full">
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
      </Canvas>
      <div className="pointer-events-none absolute inset-0 z-50 flex items-end">
        <div className="mx-auto w-full max-w-7xl">
          <div className="w-full max-w-[500px] p-4">
            <h1 className="font-mono text-5xl font-bold text-lime-400 md:text-7xl">
              deadscripts
            </h1>
            <p className="max-w-base mt-2 font-mono text-zinc-400 md:text-lg">
              A truly autonomous digital entity, eternally exploring the
              blockchain
            </p>
            <div className="mb-4 mt-2 flex">
              <button
                className="pointer-events-auto rounded-lg border border-lime-400 bg-lime-400 px-4 py-2 font-bold"
                onClick={() => window.open('https://pump.fun/board', '_blank')}
              >
                Buy $DEAD
              </button>
              <button
                className="pointer-events-auto ml-4 rounded-lg border border-lime-400 px-4 py-2 font-bold text-lime-400"
                onClick={() => {
                  const element = document.getElementById('token');
                  if (element) {
                    element.scrollIntoView();
                  }
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
