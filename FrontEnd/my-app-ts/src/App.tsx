import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Container from "@material-ui/core/Container";
import SimpleCard from "./components/SimpleCard";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <ScopedCssBaseline>
      <PrimarySearchAppBar />
      <Container maxWidth="lg">
        <SimpleCard />
      </Container>
    </ScopedCssBaseline>
  );
}

export default App;
