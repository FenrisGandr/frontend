import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../auth.js";

function Home() {
  const [user, setUser] = useState();

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) setUser(user);
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <h1>Radiologist Archive</h1>
      <div className="card">
        {user && <p>Welcome, {user.email}</p>}
        <a href="/signin">Go to signin screen</a>
      </div>
    </div>
  );
}

export default Home;
