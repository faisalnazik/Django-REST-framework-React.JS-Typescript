import React from 'react';



// import logo from './logo.svg';
import './App.css';
import { AppContainer } from "./styles"

import PrimarySearchAppBar from './components/AppBar';
import ContainedButtons from './components/DefaultButton';


function App() {
  return (
    <AppContainer>
      <PrimarySearchAppBar/>
    </AppContainer>
  );
}

export default App;