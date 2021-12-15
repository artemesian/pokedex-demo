import "./App.css";
import { Route, Routes } from "react-router";
import { Header, Content } from "antd/lib/layout/layout";
// Pages
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Header className="app-header-title">POKEDEX</Header>
      <Content className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:specie" element={<About />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
