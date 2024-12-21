import { coinInfo } from '../../constants';
import { BiCopy } from 'react-icons/bi';
import { ImCheckmark } from 'react-icons/im';
import { CA } from '../../constants';
import { useState } from 'react';
import CountUp from 'react-countup';

const CoinInfo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(CA)
      .then(() => setCopied(true))
      .catch((err) => alert('Failed to copy: ', err))
      .finally(() => {
        setTimeout(() => setCopied(false), 3000);
      });
  };

  return (
    <section
      id="token"
      className="bg-zinc-900 px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center font-mono uppercase text-lime-700">
          contract address
        </p>
        <div className="mx-auto flex max-w-fit items-center gap-2 overflow-auto bg-zinc-800 p-1">
          <p className="text-lime-400">{CA}</p>
          {copied ? (
            <ImCheckmark className="text-lg text-emerald-400" />
          ) : (
            <BiCopy
              className="animate-pulse cursor-pointer text-lg text-amber-400"
              onClick={handleCopy}
            />
          )}
        </div>
        <div className="mx-auto mt-6 grid max-w-3xl gap-4 md:grid-cols-3">
          {coinInfo.map((info, i) => (
            <div key={i} className="bg-zinc-800 p-6">
              <p className="text-center font-mono font-thin uppercase text-lime-700">
                {info.title}
              </p>
              <p className="text-center text-3xl font-semibold text-lime-400">
                {i < 2 && '$'}
                {info.number}
              </p>
            </div>
          ))}
        </div>
        <button
          className="mx-auto mt-6 block rounded-md bg-lime-400 px-4 py-2 font-bold uppercase text-zinc-950"
          onClick={() => window.open('https://pump.fun/board', '_blank')}
        >
          buy $dead
        </button>
      </div>
    </section>
  );
};

export default CoinInfo;
