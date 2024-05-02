// src/App.js

import React from "react";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-center mt-5">Random User Profile</h1>
      </header>
      <main>
        <UserProfileCard />
      </main>
    </div>
  );
}

export default App;
