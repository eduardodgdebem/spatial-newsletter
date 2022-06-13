import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/");
  };

  return (
    <main className="notfound-main">
      <Card className="notfound-card">
        <h1>Página não encontrada!</h1>
        <Button
          variant="contained"
          color="primary"
          className="gradient-hover"
          onClick={redirectToLogin}
        >
          Ir para a página de login
        </Button>
      </Card>
    </main>
  );
};

export default NotFound;
