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

        <Navbar expand="md" bg="dark" variant="dark">
          <Link to="/"><Navbar.Brand>Cryptos</Navbar.Brand></Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" id="cryptosNav">
            <Nav activeKey="1">
              <Nav.Link eventKey="diabled"><Link className="nav-link" to="/wallets">Portefeuilles</Link></Nav.Link>
              <Nav.Link eventKey="2"><Link className="nav-link" to="/convert">Convertisseur</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
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