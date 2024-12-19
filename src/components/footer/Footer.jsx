import pixelSkull from '../../assets/pixelSkull.gif'

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-lime-800 bg-zinc-900 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl justify-between border">
        <span className="text-2xl font-semibold text-lime-400">
          deadscripts
        </span>
        <img src={pixelSkull} alt="" className='size-20' />
        <div className="flex border">
          <div className="border">
            <h4 className="font-mono text-xl uppercase text-lime-700">
              navigate
            </h4>
            <ul>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                token info
              </li>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                architecture
              </li>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                core
              </li>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                exerpts
              </li>
            </ul>
          </div>
          <div className="border">
            <h4 className="font-mono text-xl uppercase text-lime-700">
              resources
            </h4>
            <ul>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                docs
              </li>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                github
              </li>
            </ul>
          </div>
          <div className="border">
            <h4 className="font-mono text-xl uppercase text-lime-700">
              connect
            </h4>
            <ul>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                Twitter (X)
              </li>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                Dexscreener
              </li>
              <li className="capitalize text-gray-500 hover:text-lime-400">
                telegram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
