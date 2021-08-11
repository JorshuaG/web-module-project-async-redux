import logo from "./logo.svg";
import "./App.css";

import PokeSearch from "./components/PokeSearch";
import Pokemon from "./components/Pokemon";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokemon Search</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PokeSearch} />

          <Route path="/pokemon" component={Pokemon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
