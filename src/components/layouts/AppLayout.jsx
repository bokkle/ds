import { Outlet } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import Footer from '../footer/Footer';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
