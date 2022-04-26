import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PokemonList from './views/Pokemon/List';

export default function App() {
  return (
    <Router>
    <Switch>
      <Route path="/pokemon">
        <PokemonList />
      </Route>
      <Route path="/">
        <p>home</p>
        <Link to="/pokemon">pokemon list</Link>
      </Route>
    </Switch>
    </Router>
  );
}
