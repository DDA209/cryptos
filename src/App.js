import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'; 

import HomeContainer from './components/containers/HomeContainer.js'
import WalletsContainer from './components/containers/WalletsContainer.js'
import ConvertContainer from './components/containers/ConvertContainer.js'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component{
  render(){
    return( 
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Cryptos</Link>
            <div className="navbar-expand" id="navbarNav">
              <ul className="navbar-nav "> 
                <li className="nav-item disabled"><Link className="nav-link" to="/wallets">Portefeuilles</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/convert">Convertisseur</Link></li>
              </ul>
            </div>
        </nav>
        <div className="container-fluid">            
          <div className="row min-vh-100">
            <main className="col-12">
              <Switch>
                <Route path="/" exact>
                  <HomeContainer />
                </Route>
                <Route path="/wallets">
                  <WalletsContainer />
                </Route>
                <Route path="/convert">
                  <ConvertContainer />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </Router>

    );
  };
}
export default App;
//className=""