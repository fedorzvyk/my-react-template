import { RotatingLines } from 'react-loader-spinner';
import css from './Loading.module.scss';

export const Loading = () => {
  return (
    <div className={css.loader__wrapper}>
      <RotatingLines />
    </div>
  );
};
