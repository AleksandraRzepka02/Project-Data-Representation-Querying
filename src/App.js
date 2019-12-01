import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import New from './components/new';
import Display from './components/display';
import Change from './components/change';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/display">View</Nav.Link>
              <Nav.Link href="/new">Add</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/new" component={New} />
            <Route path="/display" component={Display} />
            <Route path="/change/:id" component={Change} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
