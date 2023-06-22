import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetup from './Pages/AllMeetup';
import Meetup from './Pages/Meetup';
import Favorites from './Pages/Favorites';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Layout >
      <Switch>
        <Route exact path='/'>
          <AllMeetup />
        </Route>
        <Route exact path='/New-meetup'>
          <Meetup />
        </Route>
        <Route exact path='/Favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Layout >
  );
}

export default App;
