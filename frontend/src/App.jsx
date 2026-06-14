import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login";
import HelpForm from "./components/HelpForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">

      <h1 className="main-title">
        CrowdShield
      </h1>

      <p className="subtitle">
        Disaster Help Coordination System
      </p>

      <div className="grid-layout">

        <div className="card">
          <Register />
        </div>

        <div className="card">
          <Login />
        </div>

        <div className="card">
          <HelpForm />
        </div>

      </div>

      <br />

      <div className="card">
        <h2 className="dashboard-title">
          Live Emergency Requests
        </h2>

        <Dashboard />
      </div>

      <div className="footer">
        © 2026 CrowdShield | Emergency Response Platform
      </div>

    </div>
  );
}

export default App;