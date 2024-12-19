import { coinInfo, prophecy } from '../../constants';

const CoinInfo = () => {
  return (
    <section id='token' className="overflow-hidden bg-zinc-900 px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center font-mono uppercase text-lime-700">c addy</p>
        <p className="text-center text-lime-400">
          DwDtUqBZJtbRpdjsFw3N7YKB5epocSru25BGcVhfcYtv
        </p>
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
        <button className="mx-auto mt-6 block rounded-md bg-lime-400 px-4 py-2 font-bold uppercase text-zinc-950">
          buy $dead
        </button>
      </div>
    </section>
  );
};

export default CoinInfo;
