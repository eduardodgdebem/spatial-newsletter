import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import "../styles/cardPage.css";

function Login() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem("@users");

    if (userStorage) {
      setUsers(JSON.parse(userStorage));
    }
  }, [])

  function handleLogin() {
    if (!username || !password) return alert("Preencha todos os campos");

    const user = {
      username: username,
      password: password,
    }

    setUser(user);

    const userFound = users.find((user) => user.username === username);

    if (!userFound) {
      return alert("Usuário não encontrado!");
    }

    if (userFound.password !== password) {
      return alert("Senha incorreta!");
    }
    
    setUser({});
    setUsername('');
    setPassword('');

    navigate('/newsletter')
  }

  return (
    <div className="container">
      <Card className="login">
        <h1>Login</h1>
        <TextField
          className="login-input"
          margin="dense"
          value={username}
          label="Usuário"
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          type="text"
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={password}
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
          required
        />
        <Button onClick={handleLogin} variant="contained" color="primary" className="gradient-hover">
          Login &nbsp;
          <LoginIcon />
        </Button>
        <br />
        <span>
          Não possui um login? <Link to="/register">Cadastre-se</Link>
        </span>
      </Card>
    </div>
  );
}
export default Login;
