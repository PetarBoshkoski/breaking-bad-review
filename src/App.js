import "./App.css";
import Main from "./components/ui/main/Main";
import Nav from "./components/ui/navigation/Nav";
import Season from "./components/ui/season/Season";
import Episode from "./components/ui/episode/Episode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/seasons" component={Season} />
        <Route exact path="/season/:season/episodes" component={Episode} />
        
        </Switch>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
