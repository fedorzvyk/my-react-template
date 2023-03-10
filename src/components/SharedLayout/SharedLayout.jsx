import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { ToastContainer } from 'react-toastify';

export const SharedLayout = () => {
  return (
    <main>
      <div className={css.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <ToastContainer />
    </main>
  );
};
