import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp';
import scss from './Hero.module.scss';

export const Hero = handleHeroClick => {
  return (
    <div className={scss.input__wrapper}>
      <Link to={`/`} onClick={handleHeroClick}>
        <img className={scss.hero__image} src={logo} alt="Rick And Morty"></img>
      </Link>
    </div>
  );
};
