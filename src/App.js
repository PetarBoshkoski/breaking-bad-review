import "./App.css";
import Main from "./components/ui/main/Main";
import Nav from "./components/ui/navigation/Nav";
import Season from "./components/ui/season/Season";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/seasons" component={Season} />
        <Nav />
      </Router>
    </div>
  );
}

export default App;
