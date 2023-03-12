import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.scss';
import { ToastContainer } from 'react-toastify';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Outlet />
      </main>
      <ToastContainer autoClose={2000} />
    </>
  );
};
