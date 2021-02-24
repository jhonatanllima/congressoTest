import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContentVideo from './components/ContentVideo';

import { Container } from './styles';

function LiveHome() {
  return (
    <Container>
      <Switch>
        <Route path={'/'} exact render={() => <ContentVideo />} />
      </Switch>
    </Container>
  );
}

export default LiveHome;
