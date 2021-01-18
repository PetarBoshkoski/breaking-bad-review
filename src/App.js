import "./App.css";
import Main from "./components/ui/main/Main";
import Nav from "./components/ui/navigation/Nav";
import Season from "./components/ui/season/Season";
import Episode from "./components/ui/episode/Episode";
import Character from "./components/ui/character/Character";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/seasons" component={Season} />
        <Route path="/season/:season/episodes" component={Episode} />
        <Route path="/characters" component={Character} />
        
        </Switch>
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
