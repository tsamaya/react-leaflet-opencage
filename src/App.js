import React, {Fragment} from 'react';
import Header from './components/Hearder';
import Map from './components/Map';
import SideBar from './components/SideBar';

import './App.css';

const App = () => (
  <Fragment>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 col-md-4">
          <SideBar />
        </div>
        <div className="col-12 col-md-8">
          <Map />
        </div>
      </div>
    </div>
  </Fragment>
);

export default App;
