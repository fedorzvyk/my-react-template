import css from './Filter.module.css';
import logo from '../../images/logo_desktop.png';
import { ReactComponent as Search } from '../../images/search.svg';

const Filter = ({ filter, onFilter }) => {
  return (
    <div className={css.input__wrapper}>
      <img className={css.input__image} src={logo} alt=""></img>
      <div className={css.input__field}>
        <input
          type="text"
          className={css.input}
          placeholder="Filter by name..."
          value={filter}
          onChange={onFilter}
        />
        <Search className={css.input__icon} />
      </div>
    </div>
  );
};

export default Filter;
