import React, { useState } from 'react';

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputMessage })
    };
    const response = await fetch('http://localhost:3001/', requestOptions);
    const data = await response.json();
    setResponseMessage(data.message);
  };

  return (
  <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input message:
          <textarea value={inputMessage} onChange={(event) => setInputMessage(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {responseMessage &&
        <div>
          <p>{responseMessage}</p>
        </div>
      }
    </div>
  );
}

export default App;
