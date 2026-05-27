import { useEffect, useState } from "react";

import API from "../api/api";

function Dashboard() {
  const [requests, setRequests] =
    useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await API.get("/help");

    setRequests(res.data);
  };

  return (
    <div>
      <h2>Disaster Requests</h2>

      {requests.map((req) => (
        <div key={req._id}>
          <h4>{req.name}</h4>

          <p>{req.location}</p>

          <p>{req.emergency}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;