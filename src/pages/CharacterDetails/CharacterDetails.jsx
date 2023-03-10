import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from 'api/api';
import { useEffect, useState } from 'react';
import { ReactComponent as Back } from '../../images/back.svg';

import css from './CharacterDetails.module.css';

export const MovieDetails = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterById(id).then(data => {
      return setCharacter(data);
    });
  }, [id]);

  const handleGoBack = () => {
    navigate(location.state?.from || '/movies');
  };

  return (
    <div className={css.container__details}>
      <button className={css.button} onClick={handleGoBack}>
        <Back /> Go back
      </button>
      {character && (
        <div className={css.character__container}>
          <img
            className={css.character__image}
            src={`${character.image}`}
            alt={`${character.name}`}
          />
          <h1 className={css.character__name}>{character.name}</h1>
          <h2 className={css.character__subtitle}>Informations</h2>
          <ul className={css.character__list}>
            <li className={css.character__item}>
              <h3>Gender</h3>
              <p>{character.gender}</p>
            </li>
            <li className={css.character__item}>
              <h3>Status</h3>
              <p>{character.status}</p>
            </li>
            <li className={css.character__item}>
              <h3>Specie</h3>
              <p>{character.species}</p>
            </li>
            <li className={css.character__item}>
              <h3>Origin</h3>
              <p>{character.origin.name}</p>
            </li>
            <li className={css.character__item}>
              <h3>Type</h3>
              <p>{character.type || `Underfind`}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
