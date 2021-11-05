import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <div className="navigation">
          <Navbar />
        </div>

        <div className="main_content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/posts" component={Blog} />
            <Route path="/posts/:slug" component={SinglePost} />
            <Route path="/about" component={About} />
          </Switch>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
