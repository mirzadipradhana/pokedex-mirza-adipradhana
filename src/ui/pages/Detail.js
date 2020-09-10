import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import styled from 'styled-components'

import logo from '../../assets/logo.png';
import LoadingOverlay from '../components/LoadingOverlay';
import Link from '../components/Link';
import PokeCard from '../components/Card'
import useDataFetching from '../hooks/useDataFetching';
import {toTitleCase, } from '../../utils'

import {BASE_URL} from '../../config';

const ExtraContent = styled.div`
  font-size: 12px;
`;

function Detail(props) {
  const url = `${BASE_URL}/pokemon/${props.match.params.id}/`;

  const { loading, data, error } = useDataFetching(url)

  if (loading || error) {
    return !error ? <LoadingOverlay>Please wait...</LoadingOverlay> : error.message;
  }

  return (
    <div>
      <header>
        <div>
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
        <Link to="/">
          Go To Home
        </Link>
      </header>
      <PokeCard src={(data.sprites.front_default)} title={toTitleCase(data.name)}>
        <Card.Content extra>
          <ExtraContent>
            Abilities: {data.abilities.map(ab => ab.ability.name).join(',')}
          </ExtraContent>
          <ExtraContent>
            Types: {data.types.map(ty => ty.type.name).join(',')}
          </ExtraContent>
        </Card.Content>
      </PokeCard>
    </div>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
};

export default Detail;
