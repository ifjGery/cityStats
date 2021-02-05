import React from 'react';
import Header from 'Component/header';
import Landing from 'Component/pageLanding';
import City from 'Component/pageCity';
import Localisation from 'Component/localisation';
import GlobalContext from 'Component/globalContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import style from './app.less';

const App = () => (
  <div className={style.app}>
    <Localisation>
      <Header />
      <GlobalContext>
        <Router>
          <Switch>
            <Route path="/city/:cityId">
              <City />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </GlobalContext>
    </Localisation>
  </div>
);

export default App;
