import { useEffect } from "react";
import { getAllSpaceNews } from "../../services/spaceNewsService";

const NewsLetterPage = () => {
  useEffect(async () => {
    const teste = await getAllSpaceNews()
  }, [])

  return (
    <div>
      <h1>Teste</h1>
    </div>
  );
};



export default NewsLetterPage;
