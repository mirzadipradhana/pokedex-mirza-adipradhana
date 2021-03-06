import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';
import InfiniteLoadingList from 'react-simple-infinite-loading'

import logo from '../../assets/logo.png';
import LoadingOverlay from '../components/LoadingOverlay';
import Link from '../components/Link';
import Card from '../components/Card';
import Filter from '../components/Filter';
import usePokemon from '../hooks/usePokemon';
import useDataFetching from '../hooks/useDataFetching';

import {BASE_URL, IMAGE_URL} from '../../config'
import {formatUnicorn, snakeCaseToTitle} from '../../utils'

const Container = styled.div`
  width: 200px;
  height: calc(100vh - (102.984px + 50px));
  margin: auto;
  margin-top: 20px;

  .item {
    margin: 5px;
  }
`;

const Home = (props) => {
  const typeUrl = `${BASE_URL}/type`;

  const {pokemons, loading, error, loadMore, hasNextPage} = usePokemon();
  const {loading: loadingFilter, data: dataFilter, error: errorFilter} = useDataFetching(typeUrl);

  const handleFilterChange = (e, data) => {
    props.history.push(`/filter/${data.value}`)
  }

  const handleMore = loading ? () => {} : loadMore

  if (loading || loadingFilter || error || errorFilter) {
    return !error ? <LoadingOverlay>Please wait...</LoadingOverlay> : error.message;
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Filter
          caption="Filter Pokemon"
          options={
            dataFilter.results.map(f => ({
              key: f.name,
              text: snakeCaseToTitle(f.name),
              value: f.name,
            }))
          }
          onChange={handleFilterChange}
        />
      </header>
      <Container>
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
      </Container>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;
