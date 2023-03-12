import { useEffect, useState } from 'react';
import scss from './Header.module.scss';

export const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className={scss.header__wrapper}>
      <h2>Welcome, {user.displayName}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
