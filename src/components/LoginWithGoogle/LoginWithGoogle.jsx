import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../service/firebase';
import scss from './LoginWithGoogle.module.scss';
// import Home from 'pages/Home/Home';
// import { SharedLayout } from './SharedLayout/SharedLayout';
import App from '../App';
import { Hero } from 'components/Hero/Hero';

export const LoginWithGoogle = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  const handleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(credentials => {
        setUser(credentials.user);
        localStorage.setItem('user', JSON.stringify(credentials.user));
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  return (
    <main>
      {user ? (
        <App />
      ) : (
        <div className={scss.container__auth}>
          <Hero />
          <h2 className={scss.auth__title}>
            Please signin with Google to use this application
          </h2>
          <button onClick={handleClick}>Signin with Google</button>
        </div>
      )}
    </main>
  );
};
