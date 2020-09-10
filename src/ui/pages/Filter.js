import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import LoadingOverlay from '../components/LoadingOverlay';
import Link from '../components/Link';
import Card from '../components/Card';
import useDataFetching from '../hooks/useDataFetching';

import {BASE_URL, IMAGE_URL} from '../../config'
import {formatUnicorn} from '../../utils'

const Container = styled.div`
  width: 200px;
  height: calc(100vh - (102.984px + 50px));
  margin: auto;
  margin-top: 20px;

  .item {
    margin: 5px;
  }
`;

const Filter = (props) => {
  const url = `${BASE_URL}/type/${props.match.params.name}/`;
  const {loading, data, error} = useDataFetching(
    url, {
      resolver: (result) => ({
        ...result,
        pokemon: result.pokemon.map(res => {
          const regex = new RegExp(`^${BASE_URL}/pokemon/([0-9]{1,10})/`);
          const id = regex.exec(res.pokemon.url)[1];
          return {
            ...res.pokemon,
            id: parseInt(id)
          };
        })
      })
    }
  );

  if (loading || error) {
    return !error ? <LoadingOverlay>Please wait...</LoadingOverlay> : error.message;
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
      <Container>
        <List divided relaxed>
          {data.pokemon.map(d => (
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
        </List>
      </Container>
    </div>
  );
}

Filter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
};

export default Filter;
