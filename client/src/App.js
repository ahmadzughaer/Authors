import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from "@reach/router";
import React, { useState } from 'react';

import AuthorsTable from "./components/AuthorsTable"
import CreateAuthorForm from "./components/CreateAuthorForm"
import EditAuthorForm from "./components/EditAuthorForm"

function App() {

  return (
      <div className="App">
        <Router>
          <AuthorsTable path="/"/>
          <CreateAuthorForm path="/new"/>
          <EditAuthorForm path="/:id"/>
        </Router>
      </div>
  );
}

export default App;