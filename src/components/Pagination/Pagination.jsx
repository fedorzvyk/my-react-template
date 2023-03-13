import PropTypes from 'prop-types';
import scss from './Pagination.module.scss';
import { GrPrevious, GrNext } from 'react-icons/gr';

export const Pagination = ({ searcInfo, loadPrevPage, loadNextPage, page }) => {
  return (
    <div className={scss.pagination__wrapper}>
      {searcInfo.prev && (
        <button onClick={loadPrevPage} aria-label="prev">
          <GrPrevious />
        </button>
      )}
      {(searcInfo.prev || searcInfo.next) && (
        <span>
          {page}/{searcInfo.pages}
        </span>
      )}
      {searcInfo.next && (
        <button onClick={loadNextPage} aria-label="next">
          <GrNext />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  searcInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  loadPrevPage: PropTypes.func,
  loadNextPage: PropTypes.func,
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
