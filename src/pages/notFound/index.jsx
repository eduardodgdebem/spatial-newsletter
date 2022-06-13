import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <main className="notfound-main">
      <Card className="notfound-card">
        <h1>Página não encontrada!</h1>
        <Link to='/login'>Ir para a página de login</Link>
      </Card>
    </main>
  );
};

export default NotFound;
