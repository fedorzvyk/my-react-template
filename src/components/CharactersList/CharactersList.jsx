import { Link, useLocation } from 'react-router-dom';

import css from './CharactersList.module.scss';

import PropTypes from 'prop-types';

export const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <div className={css.characters__wrap}>
      <ul className={css.characters__list}>
        {characters.map(({ id, image, name, species }) => (
          <li key={id} className={css.characters__item}>
            <Link key={id} state={{ from: location }} to={`/${id}`}>
              <div className={css.character__wrap}>
                <img className={css.characters__image} src={image} alt={name} />
                <div className={css.character__info}>
                  <h2 className={css.character__name}>{name}</h2>
                  <p className={css.character__specie}>{species}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      species: PropTypes.string,
    })
  ),
};
