import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
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
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem("@users");

    if (userStorage) {
      setUsers(JSON.parse(userStorage));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("@users", JSON.stringify(users));
  }, [users])

  function handleRegister(e) {
    e.preventDefault();

    if (!username || !password || !email || !name || !age) return alert("Preencha todos os campos");

    const user = {
      username: username,
      password: password,
      email: email,
      name: name,
      age: age,
    }

    setUser(user);

    const userFound = users.find((user) => user.username === username);

    if (userFound) {
      return alert("Usuário já existente!");
    }

    setUsers([...users, user]);

    alert("Usuário cadastrado com sucesso!");

    setUser({});
    setUsername('');
    setPassword('');
    setEmail('');
    setName('');
    setAge(0);

    navigate('/');
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
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="email"
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={age}
          label="Idade"
          onChange={(e) => setAge(e.target.value)}
          variant="outlined"
          type="number"
          required
        />
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
  );
}
export default Register;
