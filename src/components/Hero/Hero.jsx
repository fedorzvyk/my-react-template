import logo from '../../images/logo_desktop.png';
import scss from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={scss.input__wrapper}>
      <img className={scss.hero__image} src={logo} alt="Rick And Morty"></img>
    </div>
  );
};
