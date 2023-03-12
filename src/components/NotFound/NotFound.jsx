import notFound from '../../images/not_found.png';
import css from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={css.notfoud__wrapper}>
      <h2>Not found. Try to find another character</h2>
      <img src={notFound} alt="Not Found" />
    </div>
  );
};
