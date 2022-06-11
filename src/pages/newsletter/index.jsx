import { useEffect, useState } from "react";
import { getAllSpaceNews } from "../../services/spaceNewsService";
import "./newsletter.css";

const NewsLetterPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    test(setNews);
  }, []);

  return (
    <div className="main-container">
      <h1>Teste</h1>
      <div className="news-container">
        {news.map((news, i) => {
          return <NewsContainer news={news} key={i} index={i}></NewsContainer>;
        })}
      </div>
    </div>
  );
};

const NewsContainer = (props) => {
  const { news, index } = props;
    return (
      <article className="news-card">
        <h2>{news.title}</h2>
        <div className={index % 2 === 0 ? "flex-left" : "flex-rigth"}>
          <img src={news.urlToImage} alt="" />
          <p>{news.content}</p>
        </div>
      </article>
    );
  
};

const test = async (setNews) => {
  const result = await getAllSpaceNews();
  console.log(result.data.articles);
  setNews(result.data.articles.filter((news) => news.content));
};

export default NewsLetterPage;
