import { Route, Switch } from "wouter";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginScreen from "./components/LoginScreen";

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="/dashboard" component={Dashboard} />
      <Route>
        <div></div>
        <h1>Radiologist Archive</h1>
        <div className="card">
          <a href="/login">Go to Login screen</a>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
