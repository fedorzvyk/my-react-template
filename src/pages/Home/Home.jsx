import { CharactersList } from 'components/CharactersList/CharactersList';
// import { getCharacters } from 'api/api';
import { toast } from 'react-toastify';

import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import { useSearchParams } from 'react-router-dom';
import { searchCharacter } from 'api/api';
import Filter from 'components/Filter/Filter';
import { Loading } from 'components/Loading/Loading';
import { NotFound } from 'components/NotFound/NotFound';
import { Hero } from 'components/Hero/Hero';
import { Pagination } from 'components/Pagination/Pagination';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searcInfo, setSearcInfo] = useState('');
  const [status, setStatus] = useState(STATUS.idle);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const searchQuery = searchParams.get('search') ?? '';

  const [search, setSearch] = useState(searchQuery);

  const fetchData = async params => {
    setStatus(STATUS.loading);
    try {
      const data = await searchCharacter(params);
      // console.log(data);
      const count = data.info.count;
      setSearcInfo(data.info);
      if (count && params.query !== '' && +params.page === 1) {
        toast.info(`We found ${count} characters`);
      }

      data.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setCharacters(data.results);
      setStatus(STATUS.success);
    } catch (error) {
      console.log(error.message);
      setCharacters(null);
      setStatus(STATUS.error);
      toast.error('Bad request. Try to find another character');
    }
  };

  const handleSearch = event => {
    setSearch(event.target.value);
    searchCharactersParams(event.target.value);
  };

  const searchCharactersParams = useMemo(() => {
    return debounce(search => {
      setSearchParams(search !== '' ? { page: 1, search } : {});
    }, 500);
  }, [setSearchParams]);

  const loadMore = () => {
    let currentPage = +page + 1;
    setSearchParams(
      search !== '' ? { page: currentPage, search } : { page: currentPage }
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const loadLess = () => {
    let currentPage = +page - 1;
    setSearchParams(
      search !== '' ? { page: currentPage, search } : { page: currentPage }
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleHeroClick = () => {
    setSearch('');
  };

  useEffect(() => {
    fetchData({ page, query: searchQuery });
  }, [page, searchQuery]);

  return (
    <>
      <Hero handleHeroClick={handleHeroClick} />
      <Filter onFilter={handleSearch} filter={search} />

      {(status === STATUS.loading || status === STATUS.idle) && <Loading />}

      {status === STATUS.error && <NotFound />}
      {characters && <CharactersList characters={characters} />}
      <Pagination
        searcInfo={searcInfo}
        loadLess={loadLess}
        loadMore={loadMore}
        page={page}
      />
    </>
  );
};

export default Home;
