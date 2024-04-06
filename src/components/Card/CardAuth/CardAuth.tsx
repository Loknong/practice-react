import { useState } from "react";
import "./CardAuth.css";
import { useNavigate } from "react-router-dom";
const CardAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (username === "admin" && password === "password") {
      navigate("/");
    } else {
      alert("Wrong");
    }
  };
  return (
    <div className="card-auth">
      <span>Practice Feature React</span>
      <img
        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
        alt=""
        className="image"
      />
      <form action="">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardAuth;
