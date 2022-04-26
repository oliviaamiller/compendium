import { Link, Route, Switch } from 'react-router-dom';
import ArtDetail from './views/Pokemon/Detail';
import PokemonList from './views/Pokemon/List';

export default function App() {
  return (
    <Switch>
      <Route path="/pokemon/...tbd">
        <ArtDetail />
      </Route>
      <Route path="/pokemon">
        <PokemonList />
      </Route>
      <Route path="/">
        <p>home</p>
        <Link to="/pokemon">pokemon list</Link>
      </Route>
    </Switch>
  );
}
