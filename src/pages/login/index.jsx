import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import LoginIcon from '@mui/icons-material/Login';import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import "./login.css";

function Login() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    setUser({
      username: username,
      password: password,
    });
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
        />
        <TextField
          className="login-input"
          margin="dense"
          value={password}
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
        />
        <Button variant="contained" type="submit" color="primary">
          Login &nbsp;
          <LoginIcon />
        </Button>
        <br />
        <span>
          Não possui um login? <Link to="/register">Cadastre-se</Link>
        </span>
      </Card>
    </div>

    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <label>Usuário</label><br />
    //     <input
    //       value={username}
    //       placeholder="Digite seu usuário"
    //       onChange={e => setUsername(e.target.value)}
    //     /><br />
    //     <label>Senha</label><br />
    //     <input
    //       type="password"
    //       placeholder='Digite sua senha'
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //     /><br />
    //     <button type='submit'>Login</button><br />
    //     <Link to="/register">Cadastrar-se</Link>
    //   </form>
    // </div>
  );
}
export default Login;
