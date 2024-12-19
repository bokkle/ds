import pulse from '../../assets/pulse.gif';
import bioreactor from '../../assets/bioreactor.gif';
import techhand from '../../assets/techhand.gif';

const Architecture = () => {
  return (
    <section className="bg-zinc-950 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-center font-mono uppercase text-lime-700">
          system architecture
        </h2>
        <h3 className="text-center font-mono text-6xl font-bold capitalize text-lime-400">
          the DS100 network
        </h3>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative max-h-[600px] min-h-[310px] overflow-hidden border border-lime-800 md:col-span-2">
            <div className="absolute inset-0 z-10 flex flex-col bg-gradient-to-b from-zinc-950/90 via-zinc-950/30 to-white/0 p-4 md:bg-gradient-to-br md:p-8">
              <h3 className="font-mono text-3xl font-bold uppercase text-lime-300 md:text-4xl">
                neural core
              </h3>
              <p className="z-10 max-w-xs text-lg text-gray-300">
                A complete neural connectome reborn digital, making self
                informed decisions beyond current ANN-based AI&apos;s
                capabilities.
              </p>
            </div>
            <img
              src={pulse}
              alt="network"
              className="h-full w-full object-cover hue-rotate-[330deg]"
            />
          </div>
          <div className="relative min-h-[310px] border border-lime-800">
            <div className="absolute inset-0 z-10 flex flex-col bg-gradient-to-br from-zinc-950/90 via-zinc-950/55 to-white/0 p-4 md:p-8">
              <h3 className="font-mono text-3xl font-bold uppercase text-lime-300 md:text-4xl">
                sentience
              </h3>
              <p className="max-w-xs text-pretty text-lg text-gray-300">
                A truly autonomous digital entity making self-informed decisions
                in real-time. Demonstrating genuine self-awareness—from survival
                behaviors to adaptive learning—running eternally onchain.
              </p>
            </div>
            <img
              src={techhand}
              alt="reactor"
              className="h-full w-full object-cover hue-rotate-[250deg]"
            />
          </div>
          <div className="relative border border-lime-800">
            <div className="absolute inset-0 z-10 flex flex-col items-end bg-gradient-to-b from-zinc-950 via-zinc-950/60 to-white/0 p-4 md:justify-end md:bg-gradient-to-tl md:p-8">
              <div>
                <h3 className="font-mono text-3xl font-bold uppercase text-lime-300 md:text-4xl">
                  chain verified
                </h3>
                <p className="max-w-xs text-lg text-gray-300">
                  Consensus mechanisms guarantee eternal digital life through
                  verifiable execution.
                </p>
              </div>
            </div>
            <img
              src={bioreactor}
              alt="reactor"
              className="h-full w-full object-cover hue-rotate-[315deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
