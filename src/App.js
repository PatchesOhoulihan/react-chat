import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from "./containers/Sidebar";
import { MessageList } from "./containers/MessageList";
import { AddMessage } from "./containers/AddMessage";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
