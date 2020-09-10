import React from 'react';
import { List } from 'semantic-ui-react'

import logo from '../../assets/logo.png';
import LoadingOverlay from '../components/LoadingOverlay';
import Link from '../components/Link';
import useDataFetching from '../hooks/useDataFetching';

import {BASE_URL} from '../../config'

function Home() {
  const url = `${BASE_URL}/pokemon`;

  const { loading, data, error } = useDataFetching(
    url,
    {
      resolver: (result) => ({
        ...result,
        results: result.results.map(res => {
          const regex = new RegExp(`^${url}/([0-9]{1,10})/`);
          const id = regex.exec(result.results[0].url)[1];
          return {
            ...res,
            id: parseInt(id)
          };
        })
      })
    }
  )

  if (loading || error) {
    return !error ? <LoadingOverlay>Please wait...</LoadingOverlay> : error.message;
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <List divided relaxed>
          {data.results.map(d => (
             <List.Item>
               <List.Content>
                  <List.Header as={({children}) => (
                    <Link to={`/detail/${d.id}`}>
                      {children}
                    </Link>
                  )}>
                    {d.name}
                  </List.Header>
                </List.Content>
             </List.Item>
          ))}
        </List>
      </header>
    </div>
  );
}

export default Home;
