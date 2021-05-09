import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StarshipsContainer} from "./components/StarshipsList/StarshipsContainer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <StarshipsContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
