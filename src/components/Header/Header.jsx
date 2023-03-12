import { useEffect, useState } from 'react';
import scss from './Header.module.scss';

export const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userR&M')));
  }, []);

  const logout = () => {
    localStorage.removeItem('userR&M');
    window.location.reload();
  };
  return (
    <div className={scss.header__wrapper}>
      <h2 className={scss.header__title}>Welcome, {user.displayName}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
