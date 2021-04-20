import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import DemosView from './views/DemosView';
import TransactionsView from './views/TransactionsView';
import UsersView from './views/UsersView';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <main className="container">
        <header className="row">
          <h1>ESRI React + Typescript</h1>
        </header>
        <hr />
        <nav className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/demos">Demos</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/users">Users</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/transactions">Transactions</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/demos">
          <DemosView />
        </Route>
        <Route path="/users">
          <UsersView />
        </Route>
        <Route path="/transactions">
          <TransactionsView />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
