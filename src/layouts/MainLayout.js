import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

// import Loader from 'shared/components/Loader';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
