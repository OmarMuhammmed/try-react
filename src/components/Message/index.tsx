import { useState } from 'react';

function Message() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Welcome to React!")}>
        Click Me!
      </button>
    </div>
  );
}

export default Message;