import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../service/firebase';
import scss from './LoginWithGoogle.module.scss';
import { FcGoogle } from 'react-icons/fc';
import App from '../App';
import { Hero } from 'components/Hero/Hero';
import animation from '../../images/rick-and-morty-breaking-bad.gif';

export const LoginWithGoogle = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  const handleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(credentials => {
        setUser(credentials.user);
        localStorage.setItem('userR&M', JSON.stringify(credentials.user));
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    setUser(localStorage.getItem('userR&M'));
  }, []);

  return (
    <>
      {user ? (
        <App />
      ) : (
        <div className={scss.container__auth}>
          <Hero />
          <h2 className={scss.auth__title}>
            Use your Google Account to sign in!
          </h2>
          <button onClick={handleClick}>
            Signin with Google <FcGoogle size={25} />
          </button>
          <img
            className={scss.auth__animation}
            src={animation}
            alt="rick and morty"
          ></img>
        </div>
      )}
    </>
  );
};
