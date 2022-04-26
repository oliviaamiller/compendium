import { Link, Route, Switch } from 'react-router-dom';
import ArtDetail from './views/Art/Detail';
import ArtList from './views/Art/List';

export default function App() {
  return (
    <Switch>
      <Route path="/art/...tbd">
        <ArtDetail />
      </Route>
      <Route path="/art">
        <ArtList />
      </Route>
      <Route path="/">
        <p>home</p>
        <Link to="/art">art list</Link>
      </Route>
    </Switch>
  );
}
