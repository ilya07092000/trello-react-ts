import { Switch, Route } from 'react-router-dom';
import Boards from './containers/Boards/Boards';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Boards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
