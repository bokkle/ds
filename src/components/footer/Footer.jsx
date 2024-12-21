import { FaXTwitter, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-lime-800 bg-zinc-900 px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4">
        <span className="font-mono text-4xl text-lime-400">deadscripts</span>
        <div className="flex gap-4">
          <FaXTwitter className="cursor-not-allowed text-3xl text-gray-600 hover:text-lime-400" />
          <a
            href="https://github.com/bokkle/ds"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl text-gray-600 hover:text-lime-400" />
          </a>
        </div>
        <p className="text-gray-600">
          Copyright &copy; deadscripts {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
