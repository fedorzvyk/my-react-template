import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.scss';
import { ToastContainer } from 'react-toastify';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Outlet />
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
};
