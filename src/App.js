import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/Outlet/Layout';
import About from './Components/Pages/About Page/About';
import GetInvolved from './Components/Pages/Getinvolved/Getinvolved'
import Project from './Components/Pages/Project/Project';
import LifeItem from './Components/Life Items/LifeItems';

function App() {

  
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route path="/" exact component={LifeItem} />
          <Route path="/About" component={About} />
          <Route path="/Getinvolved" component={GetInvolved} />
          <Route path="/Project" component={Project} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;