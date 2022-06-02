import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);


  function handleRegister(e) {
    e.preventDefault()
    debugger
  }

  return (
    <div>
      <h1>Tela de Cadastro</h1>
      <form onSubmit={handleRegister}>
        <label>Nome</label><br />
        <input
          value={name}
          placeholder="Digite seu nome"
          onChange={e => setName(e.target.value)}
        /><br />
        <label>Email</label><br />
        <input
          placeholder='Digite seu email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br />
        <label>Idade</label><br />
        <input
          placeholder='Digite sua idade'
          value={age}
          onChange={e => setAge(e.target.value)}
        /><br />
        <label>Usuário</label><br />
        <input
          placeholder='Digite seu usuário'
          value={username}
          onChange={e => setUsername(e.target.value)}
        /><br />
        <label>Senha</label><br />
        <input
          type="password"
          placeholder='Digite sua senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br />
        <button type='submit'>Cadastrar-se</button><br />
        <Link to="/">Voltar ao Login</Link>
      </form>
    </div>
  );
}
export default Register;
