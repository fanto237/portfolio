import "./App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
