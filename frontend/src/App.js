import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/emails")
      .then((response) => setEmails(response.data))
      .catch((err) => console.error("Error fetching emails:", err));
  }, []);

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Email Subscription Cleaner</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {emails.map((email, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <strong>Sender:</strong> {email.sender}
            <br />
            <strong>Subject:</strong> {email.subject}
            <br />
            {email.unsubscribe.startsWith("mailto:") ? (
              <a href={email.unsubscribe}>Send Unsubscribe Email</a>
            ) : (
              <a href={email.unsubscribe} target="_blank" rel="noreferrer">
                Unsubscribe
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
