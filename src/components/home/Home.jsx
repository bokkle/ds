import Architecture from '../architecture/Architecture';
import CoinInfo from '../coininfo/CoinInfo';
import Core from '../core/Core';
import Exerpts from '../exerpts/Exerpts';
import Hero from '../hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <CoinInfo />
      <Architecture />
      <Core />
      <Exerpts />
    </>
  );
};

export default Home;
