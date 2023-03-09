import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Container, Header, Link } from 'components/App.styled';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <main>
      <div className={css.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
