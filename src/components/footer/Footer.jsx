const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-lime-800 bg-zinc-900 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 border sm:flex-row">
        <span className="text-5xl font-semibold text-lime-400">
          deadscripts
        </span>
        <div className="flex gap-6 border">
          <div className="border">
            <h4 className="font-mono text-xl uppercase text-lime-700">
              navigate
            </h4>
            <ul>
              <a href="#token">
                <li className="capitalize text-gray-500 hover:text-lime-400">
                  token info
                </li>
              </a>
              <a href="#architecture">
                <li className="capitalize text-gray-500 hover:text-lime-400">
                  architecture
                </li>
              </a>
              <a href="#core">
                <li className="capitalize text-gray-500 hover:text-lime-400">
                  core
                </li>
              </a>
              <a href="#exerpts">
                <li className="capitalize text-gray-500 hover:text-lime-400">
                  exerpts
                </li>
              </a>
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
