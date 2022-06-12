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
      <h1>JORNAL</h1>
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
      <div className={index % 2 === 0 ? "flex-left" : "flex-rigth"}>
        <div>
          <h2 className="title">{news.title}</h2>
          <p className="paragraph">{news.content.split("[").shift()}</p>
        </div>
        <a href={news.url}>
          <img src={news.urlToImage} alt="Imagem da notifica" />
        </a>
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
