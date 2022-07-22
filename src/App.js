import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "../src/components/home/Home";
import Mainabout from "./components/about/Mainabout";
import Mc from "./components/contact us/Mc";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Mainabout} />
          <Route exact path="/say-hi" component={Mc} />
          <Route exact path="/project" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
