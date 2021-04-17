import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContainer } from "./styles"
import { Column } from "./Column"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"

const App = () => {
  return (
  <AppContainer>
  <Column text="To Do">
  <Card text="Generate app scaffold" />
  </Column>
  <Column text="In Progress">
  <Card text="Learn Typescript" />
  </Column>
  <Column text="Done">
  <Card text="Begin to use static typing" />
  </Column>
  <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
  </AppContainer>
)
}
export default App;
