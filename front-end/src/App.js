import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/Home.js';
import SignIn from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/Signin.js';
import ClientPage from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/ClientPage/index.js';

function App({ isAuth }) {
  return (
    <div className="App">
      <Switch>
        <main>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/client/1">
            <ClientPage />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
