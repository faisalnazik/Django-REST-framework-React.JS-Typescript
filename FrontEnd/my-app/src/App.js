// import logo from "./logo.svg";
import "./App.css";
import { AppContainer } from "./styles";
import PrimarySearchAppBar from "./components/AppBar";

function App() {
  return (
    <AppContainer>
      <PrimarySearchAppBar style={{ background: "#102027" }} />
    </AppContainer>
  );
}

export default App;
