// import logo from "./logo.svg";
import "./App.css";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { AppContainer } from "./styles";
import PrimarySearchAppBar from "./components/AppBar";
import ClippedDrawer from "./components/Drawer";
import Sidebar from "./components/SideBar";
import { Layout } from "antd";
import SimpleCard from "./components/Cards/AllContent";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <ScopedCssBaseline>
      <PrimarySearchAppBar />
      {/* <Container className="ButtonContainer"></Container> */}
      <Container maxWidth="lg">
        <SimpleCard className="SimpleCard" />
      </Container>
    </ScopedCssBaseline>
  );
}

export default App;
