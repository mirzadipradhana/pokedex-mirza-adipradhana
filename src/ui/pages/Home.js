import React from 'react';
import { List } from 'semantic-ui-react'
import InfiniteLoadingList from 'react-simple-infinite-loading'

import logo from '../../assets/logo.png';
import LoadingOverlay from '../components/LoadingOverlay';
import Link from '../components/Link';
import Card from '../components/Card'
import usePokemon from '../hooks/usePokemon';

import {IMAGE_URL} from '../../config'
import {formatUnicorn} from '../../utils'

function Home() {
  const {pokemons, loading, error, loadMore, hasNextPage} = usePokemon();

  const handleMore = loading ? () => {} : loadMore
  const isPokemonLoaded = index => !hasNextPage || index < pokemons.length

  if (loading || error) {
    return !error ? <LoadingOverlay>Please wait...</LoadingOverlay> : error.message;
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
      <div className="list-container">
        <InfiniteLoadingList
          itemHeight={220}
          hasMoreItems={hasNextPage}
          loadMoreItems={handleMore}
          customScrollbar
        >
          {pokemons.map(d => (
            <List.Item key={`item-${d.id}`}>
              <List.Content>
                  <List.Header as={({children}) => (
                    <Link to={`/detail/${d.id}`}>
                      {children}
                    </Link>
                  )}>
                    <Card src={formatUnicorn(IMAGE_URL, d.id)} title={d.name}></Card>
                  </List.Header>
                </List.Content>
            </List.Item>
          ))}
        </InfiniteLoadingList>
      </div>
    </div>
  );
}

export default Home;
