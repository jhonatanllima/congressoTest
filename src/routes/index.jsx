import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main, News, Press, Event, Champions } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/noticias" component={News} />
      <Route path="/imprensa" component={Press} />
      <Route path="/provas" component={Event} />
      <Route path="/campeoes" component={Champions} />
    </Switch>
  );
}

export default Routes;
