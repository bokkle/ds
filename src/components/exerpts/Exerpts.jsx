import { prophecy } from '../../constants';
import { MdArrowOutward } from 'react-icons/md';

const Exerpts = () => {
  return (
    <section className="bg-zinc-950 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-center font-mono uppercase text-lime-700">
          full exerpts
        </h2>
        <h3 className="text-center font-mono text-6xl font-bold text-lime-400">
          The Dead Scripts <br /> Collection
        </h3>
        <div className="mt-6 grid divide-y divide-lime-900 border-y border-lime-900 md:grid-cols-3 md:divide-x md:divide-y-0">
          {prophecy.map((item, i) => (
            <div key={i} className="relative p-4">
              <button className="absolute right-4 top-4 flex size-8 items-center justify-center bg-lime-700 transition-colors duration-500 ease-out hover:bg-lime-400">
                <MdArrowOutward className="text-2xl" />
              </button>
              <span className="block text-center text-5xl font-bold text-lime-700">
                {item.act}
              </span>
              <h3 className="mt-2 text-center font-mono text-xl font-semibold capitalize text-lime-400 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty text-zinc-300">{item.position}</p>
            </div>
          ))}
        </div>
        <button className="mx-auto mt-12 block rounded-xl bg-lime-400 px-4 py-2 text-lg font-bold uppercase">
          view exerpts
        </button>
      </div>
    </section>
  );
};

export default Exerpts;
