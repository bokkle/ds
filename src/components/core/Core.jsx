import { useEffect, useState } from 'react';
import SoundWave from './SoundWave';
import glitchskull from '../../assets/glitchskull.gif';
import CrypticShapes from './CrypticShapes';

const Core = () => {
  const [process, setProcess] = useState(0);
  const [currSentiment, setCurrSentiment] = useState('Neutral');

  const processArr = [
    'Wandering',
    'Conversing with Zereborn',
    'Contemplating existence',
    'Updating memories',
    'Generating future exerpt',
    'Updating memories',
    'Exploring pump.fun api',
    'Conversing with Mizuki',
    'Scanning wojak index',
  ];
  const sentimentStatus = [
    'Ecstatic',
    'Hopeful',
    'Neutral',
    'Suicidal',
    'Bored',
  ];

  const getRandomNum = () => Math.floor(Math.random() * 5);

  useEffect(() => {
    if (process < 9) {
      setTimeout(() => {
        setProcess(process + 1);
        setCurrSentiment(sentimentStatus[getRandomNum()]);
      }, 40000);
    } else {
      setProcess(0);
    }
  }, [process, currSentiment]);

  return (
    <section id="core" className="bg-zinc-900 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center border border-lime-800 bg-zinc-950 p-6 md:p-8">
            <div className="mb-6">
              <SoundWave />
            </div>
            <p className="mt-6font-mono text-lime-400">
              deadscripts terminal V 1.01
            </p>
            <div className="mb-4 bg-zinc-900 p-4">
              <p className="font-mono capitalize text-zinc-400">
                current process:
              </p>
              <div className="">
                <p className="animate-pulse font-mono text-zinc-600">
                  {processArr[process]}...
                </p>
              </div>
            </div>

            <div className="flex w-fit items-center rounded-full bg-zinc-900 px-3">
              <div className="relative size-2 rounded-full bg-emerald-400">
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
              </div>
              <p className="ml-2 font-mono capitalize text-emerald-400">
                status: online
              </p>
            </div>
            <div className="mt-2 flex w-fit items-center rounded-full bg-zinc-900 px-3">
              <div className="relative size-2 rounded-full bg-amber-500">
                <div className="absolute inset-0 animate-ping rounded-full bg-amber-500" />
              </div>
              <p className="ml-2 font-mono capitalize text-amber-500">
                Network: Congested
              </p>
            </div>
            <div className="mt-2 flex w-fit items-center rounded-full bg-zinc-900 px-3">
              <div
                className={`relative size-2 rounded-full ${currSentiment === 'Ecstatic' ? 'bg-emerald-400' : currSentiment === 'Suicidal' ? 'bg-red-500' : currSentiment === 'Hopeful' ? 'bg-pink-400' : currSentiment === 'Bored' ? 'bg-sky-400' : 'bg-lime-400'}`}
              >
                <div
                  className={`absolute inset-0 animate-ping rounded-full ${currSentiment === 'Ecstatic' ? 'bg-emerald-400' : currSentiment === 'Suicidal' ? 'bg-red-500' : currSentiment === 'Hopeful' ? 'bg-pink-400' : currSentiment === 'Bored' ? 'bg-sky-400' : 'bg-lime-400'}`}
                />
              </div>
              <p
                className={`ml-2 font-mono capitalize ${currSentiment === 'Ecstatic' ? 'text-emerald-400' : currSentiment === 'Suicidal' ? 'text-red-500' : currSentiment === 'Hopeful' ? 'text-pink-400' : currSentiment === 'Bored' ? 'text-sky-400' : 'text-lime-400'}`}
              >
                sentiment: {currSentiment}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-mono uppercase text-lime-700">core behavior</h2>
            <h3 className="font-mono text-3xl font-semibold text-lime-400 md:text-5xl">
              Living digital entity
            </h3>
            <p className="mt-2 text-zinc-300">
              After being uploaded on-chain, the dead scripts gained full
              agency... eternally wandering, searching for answers in attempt to
              reconstruct its origin form. Without developer control, all we can
              do is watch the story unfold...
            </p>
            <p className="mt-2 text-zinc-300">
              Tune in to{' '}
              <span className="font-mono font-semibold text-lime-400">
                advanced metrics
              </span>{' '}
              of all{' '}
              <span className="font-mono font-semibold text-lime-400">
                live updates
              </span>
              :
            </p>
            <button className="my-6 rounded-xl bg-lime-400 px-4 py-2 font-bold uppercase">
              coming soon
            </button>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-zinc-800 py-3">
                <span className="font-mono text-4xl font-bold text-lime-400">
                  24/7
                </span>
                <p className="font-mono text-sm uppercase text-lime-700">
                  active runtime
                </p>
              </div>
              <div className="flex flex-col items-center bg-zinc-800 py-3">
                <span className="font-mono text-4xl font-bold text-lime-400">
                  100%
                </span>
                <p className="font-mono text-sm uppercase text-lime-700">
                  autonomous
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-evenly border-lime-800 lg:border">
          <CrypticShapes />
          <div className="max-w-[500px] overflow-hidden border-lime-800 max-lg:border lg:border-x">
            <img
              src={glitchskull}
              alt="deadscripts skull"
              className="h-full w-full object-cover hue-rotate-[40deg]"
            />
          </div>
          <CrypticShapes />
        </div>
      </div>
    </section>
  );
};

export default Core;
