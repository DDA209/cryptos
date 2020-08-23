import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'; 
import { 
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import HomeContainer from './components/containers/HomeContainer.js'
import WalletsContainer from './components/containers/WalletsContainer.js'
import ConvertContainer from './components/containers/ConvertContainer.js'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component{
  render(){
    return( 
      <Router>

        <Navbar bg="dark" variant="dark">
        {/* </Navbar>className="navbar navbar-dark bg-dark"> */}
          <Link to="/"><Navbar.Brand>Cryptos</Navbar.Brand></Link>
            <div className="navbar-expand" id="navbarNav">
              <ul className="navbar-nav "> 
                <li className="nav-item disabled"><Link className="nav-link" to="/wallets">Portefeuilles</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/convert">Convertisseur</Link></li>
              </ul>
            </div>
        </Navbar>

        <Container fluid>            
          <Row>
            <Col xs={12}>

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

            </Col>
          </Row>
        </Container>
        
      </Router>

    );
  };
}
export default App;
//className=""