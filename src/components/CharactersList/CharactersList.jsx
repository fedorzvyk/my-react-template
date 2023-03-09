import { Link, useLocation } from 'react-router-dom';

import css from './CharactersList.module.css';

import PropTypes from 'prop-types';

const FAKE_PHOTO = 'https://screench.com/upload/no-poster.jpeg';

export const CharactersList = ({ characters }) => {
  const location = useLocation();
  console.log(characters);

  return (
    <ul className={css.characters__list}>
      {characters.map(({ id, image, name, species }) => (
        <li key={id} className={css.characters__item}>
          <Link key={id} state={{ from: location }} to={`/${id}`}>
            <div className={css.characters__wrap}>
              <img src={`${image ? image : FAKE_PHOTO}`} alt={name} />
              <div className={css.character__info}>
                <h2 className={css.character__name}>{name}</h2>
                <p className={css.character__specie}>{species}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
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
