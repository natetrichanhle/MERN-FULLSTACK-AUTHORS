import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/author/">
          <Main />
        </Route>
        <Route exact path="/author/:id">
          <Detail />
        </Route>
        <Route path="/author/edit/:id">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;