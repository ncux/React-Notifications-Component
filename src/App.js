import React from 'react';
import './App.css';
import { NotificationsState } from "./context/notifications/context";

function App() {
  return (
    <NotificationsState>
        <div className="App">
            <p>fuck</p>
        </div>
    </NotificationsState>
  );
}

export default App;
