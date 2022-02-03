
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "../src/components/navbar/Navbar";
import './app.css'
import Home from "../src/components/home/Home";
import Mainabout from './components/about/Mainabout';
import Mc from './components/contact us/Mc';

function App() {
  return (
    <div className="App">
      
     <Router >
    
       <Switch>
      
       <Route exact path="/" component={Home} />
       
       <Route exact path="/about" component={Mainabout} />
       <Route exact path="/say-hi" component={Mc}/>
       </Switch>
     </Router>
    
     
    </div>
  );
}

export default App;
