import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import "./App.css";
import { firebaseAuth } from "./auth";
import Dashboard from "./components/Dashboard";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState(firebaseAuth.currentUser);

  useEffect(() => {
    setUser(firebaseAuth.currentUser);
  }, [user]);

  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="/dashboard" component={Dashboard} />
      <Route>
        <div></div>
        <h1>Radiologist Archive</h1>
        <div className="card">
          {user && <p>Welcome, {user.email}</p>}
          <a href="/login">Go to Login screen</a>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
