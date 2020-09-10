import {useState} from 'react';
import useDataFetching from './useDataFetching';

import {BASE_URL} from '../../config'

const usePokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const url = `${BASE_URL}/pokemon`;

  const { loading, data, error, fetchMore } = useDataFetching(
    url,
    {
      resolver: (result) => ({
        ...result,
        results: result.results.map(res => {
          const regex = new RegExp(`^${url}/([0-9]{1,10})/`);
          const id = regex.exec(res.url)[1];
          return {
            ...res,
            id: parseInt(id)
          };
        })
      })
    }
  )

  if (loading && !data) return {loading, pokemons: []};

  const loadMore = () => {
    setPokemons([...pokemons, ...results])
    return fetchMore(data.next);
  };

  const results = data.results || [];

  return {
    pokemons: [...pokemons, ...results],
    hasNextPage: !!data.next,
    loading,
    loadMore,
    error,
  };
}

export default usePokemon;
