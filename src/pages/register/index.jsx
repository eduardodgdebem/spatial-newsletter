import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import "../login/login.css";

function Register() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  function handleRegister(e) {
    e.preventDefault();
    debugger;
  }

  return (
    <div className="container">
      <Card className="login">
        <h1>Cadastro</h1>
        <TextField
          className="login-input"
          margin="dense"
          value={name}
          label="Nome"
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          type="text"
        />
        <TextField
          className="login-input"
          margin="dense"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="email"
        />
        <TextField
          className="login-input"
          margin="dense"
          value={age}
          label="Idade"
          onChange={(e) => setAge(e.target.value)}
          variant="outlined"
          type="number"
        />
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
        <Button
          onClick={handleRegister}
          variant="contained"
          type="submit"
          color="success"
        >
          Cadastrar &nbsp;
          <HowToRegIcon />
        </Button>
        <br />
        <span>
          <Link to="/">Voltar para Login</Link>
        </span>
      </Card>
    </div>

    // <div>
    //   <h1>Tela de Cadastro</h1>
    //   <form onSubmit={handleRegister}>
    //     <label>Nome</label><br />
    //     <input
    //       value={name}
    //       placeholder="Digite seu nome"
    //       onChange={e => setName(e.target.value)}
    //     /><br />
    //     <label>Email</label><br />
    //     <input
    //       placeholder='Digite seu email'
    //       value={email}
    //       onChange={e => setEmail(e.target.value)}
    //     /><br />
    //     <label>Idade</label><br />
    //     <input
    //       placeholder='Digite sua idade'
    //       value={age}
    //       onChange={e => setAge(e.target.value)}
    //     /><br />
    //     <label>Usuário</label><br />
    //     <input
    //       placeholder='Digite seu usuário'
    //       value={username}
    //       onChange={e => setUsername(e.target.value)}
    //     /><br />
    //     <label>Senha</label><br />
    //     <input
    //       type="password"
    //       placeholder='Digite sua senha'
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //     /><br />
    //     <button type='submit'>Cadastrar-se</button><br />
    //     <Link to="/">Voltar ao Login</Link>
    //   </form>
    // </div>
  );
}
export default Register;
