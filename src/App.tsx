import { Switch, Route } from 'react-router-dom';
import Boards from './containers/Boards/Boards';
import Board from './containers/Board/Board';
import Header from './components/Header/Header';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/board/:id">
          <Board />
        </Route>
        <Route path="/">
          <Boards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
