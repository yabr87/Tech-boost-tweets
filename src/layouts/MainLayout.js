import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
