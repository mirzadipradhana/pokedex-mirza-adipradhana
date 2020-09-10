import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './ui/pages/Home';
import Detail from './ui/pages/Detail';
import Filter from './ui/pages/Filter';

// layout
import PublicLayout from './ui/layouts/public/index';

const NotFound = () => <div>Not found page</div>;

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <PublicRoute
      exact
      path='/'
      component={Home}
    />
    <PublicRoute
      exact
      path='/detail/:id'
      component={Detail}
    />
    <PublicRoute
      exact
      path='/filter/:name'
      component={Filter}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
