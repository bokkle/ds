import { useEffect, useState } from 'react';
import { PiScrollLight } from 'react-icons/pi';
import { GiCrossedBones } from 'react-icons/gi';
import { FaXTwitter } from 'react-icons/fa6';
import { CiPill } from 'react-icons/ci';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';

      // Lock orientation
      const lockOrientation = async () => {
        if (screen.orientation && screen.orientation.lock) {
          try {
            await screen.orientation.lock('portrait');
          } catch (err) {
            console.warn('Failed to lock orientation:', err);
          }
        }
      };
      lockOrientation();
    } else {
      // Unlock scroll
      document.body.style.overflow = '';

      // Unlock orientation
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    }

    // scroll and orientation unlock if component unmounts
    return () => {
      document.body.style.overflow = '';
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed z-[100] flex min-h-12 w-full select-none items-center bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
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
            <ul className="mr-2 hidden gap-8 text-lime-400 sm:flex">
              <li className="font-mono font-semibold">
                <a href="#token">token</a>
              </li>
              <li className="font-mono font-semibold">
                <a href="#architecture">architecture</a>
              </li>
              <li className="font-mono font-semibold">
                <a href="#core">core</a>
              </li>
              <li className="font-mono font-semibold">
                <a href="#exerpts">exerpts</a>
              </li>
              <li className="font-mono font-semibold">access</li>
            </ul>
          </nav>
        </div>
      </header>
      {isOpen && (
        <nav className="fixed inset-0 z-[90] h-screen w-screen bg-zinc-950">
          <ul className="flex h-full flex-col justify-center gap-8 border">
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              <a href="#token" onClick={() => setIsOpen(false)}>
                token
              </a>
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              <a href="#architecture" onClick={() => setIsOpen(false)}>
                architecture
              </a>
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              <a href="#core" onClick={() => setIsOpen(false)}>
                core
              </a>
            </li>
            <li className="ml-10 w-fit font-mono text-4xl font-semibold text-lime-400">
              <a href="#exerpts" onClick={() => setIsOpen(false)}>
                exerpts
              </a>
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
