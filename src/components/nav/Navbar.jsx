import { useEffect, useState } from 'react';
import { PiScrollLight } from 'react-icons/pi';
import { GiCrossedBones } from 'react-icons/gi';
import { FaXTwitter } from 'react-icons/fa6';
import { CiPill } from 'react-icons/ci';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed z-50 flex min-h-12 w-full items-center bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between border">
          <span className="ml-2 font-mono text-xl font-semibold text-lime-400">
            deadscripts
          </span>
          <nav>
            {isOpen ? (
              <GiCrossedBones
                className="mr-2 text-3xl text-lime-400 sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <PiScrollLight
                className="mr-2 text-3xl text-lime-400 sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <ul className="hidden gap-8 text-lime-400 md:flex">
              <li>lore</li>
              <li>exerpts</li>
              <li>access</li>
            </ul>
          </nav>
        </div>
      </header>
      {isOpen && (
        <nav className="fixed inset-0 z-[40] h-screen w-screen bg-zinc-950">
          <ul className="flex h-full flex-col justify-center gap-8 border">
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              token
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              architecture
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              core
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              exerpts
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              access
            </li>
          </ul>
          <div className="absolute bottom-5 flex w-full justify-center gap-5">
            <FaXTwitter className="text-4xl text-lime-400" />
            <CiPill className="text-4xl text-lime-400" />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
