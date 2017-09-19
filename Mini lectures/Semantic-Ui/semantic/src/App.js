import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu>
          <Menu.Menu>
            <Menu.Item>
              bob ross
            </Menu.Item>
            <Menu.Item >
              Tim Allen
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item>
            bob ross
            </Menu.Item>
            <Menu.Item > Tim Allen </Menu.Item>
          </Menu.Menu >
        </Menu>
      </div>
    );
  }
}

export default App;
