import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navigation">
          <Navbar />
        </div>

        <div className="main_content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="about">
              <About />
            </Route>
          </Switch>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
