import PropTypes from 'prop-types';
import css from './Filter.module.scss';
import { ReactComponent as Search } from '../../images/search.svg';

const Filter = ({ filter, onFilter }) => {
  return (
    <div className={css.input__wrapper}>
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

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
