import notFound from '../../images/not_found.webp';
import scss from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={scss.notfoud__wrapper}>
      <h2 className={scss.notfoud__title}>
        Not found. Try to find another character
      </h2>
      <img className={scss.notfoud__image} src={notFound} alt="Not Found" />
    </div>
  );
};
