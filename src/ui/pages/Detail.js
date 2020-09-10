import React from 'react';

import logo from '../../assets/logo.png';
import LoadingOverlay from '../components/LoadingOverlay';
import Link from '../components/Link';
import useDataFetching from '../hooks/useDataFetching';
import {toTitleCase} from '../../utils'

import {BASE_URL} from '../../config';

function Detail(props) {
  const url = `${BASE_URL}/pokemon/${props.match.params.id}/`;

  const { loading, data, error } = useDataFetching(url)

  if (loading || error) {
    return !error ? <LoadingOverlay>Please wait...</LoadingOverlay> : error.message;
  }

  debugger

  return (
    <div>
      <header>
        <img src={logo} className="Home-logo" alt="logo" />
        <Link to="/">
          Go To Home
        </Link>
      </header>
      <h1>
        {toTitleCase(data.name)}
      </h1>
    </div>
  );
}

export default Detail;
