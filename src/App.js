import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import About from "./Components/AboutActivity/About";
import Home from "./Components/Home/Home";
import Users from "./Components/userActivity/Users";

import rootReducer from "./reducers/index"

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/about/">About</Link>
                          </li>
                          <li>
                              <Link to="/users/">Users</Link>
                          </li>
                      </ul>
                  </nav>

                  <Route path="/" exact component={Home} />
                  <Route path="/about/" component={About} />
                  <Route path="/users/" component={Users} />
              </div>
          </Router>
      </Provider>
  );
}

export default App;
