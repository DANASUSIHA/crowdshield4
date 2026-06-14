import { useState } from "react";

import API from "../api/api";

function HelpForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    emergency: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/help", form);

      alert("SOS Request Sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Emergency Help</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Location"
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Emergency"
          onChange={(e) =>
            setForm({
              ...form,
              emergency: e.target.value
            })
          }
        />

        <button>
          Send SOS
        </button>
      </form>
    </div>
  );
}

export default HelpForm;