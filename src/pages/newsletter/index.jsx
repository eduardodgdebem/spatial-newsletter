import { useEffect, useState } from "react";
import { getAllSpaceNews } from "../../services/spaceNewsService";
import "./newsletter.css";

const NewsLetterPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(setNews);
  }, []);

  return (
    <div className="main-container">
      <NewsHeader />
      <div className="news-container">
        {news.map((news, i) => {
          return <NewsContainer news={news} key={i} index={i}></NewsContainer>;
        })}
      </div>
    </div>
  );
};

const NewsHeader = () => {
  return (
    <header className="main-header-container">
      <h1>JORNAL</h1>
    </header>
  );
};

const NewsContainer = (props) => {
  const { news, index } = props;
  return (
    <article className="news-card" onClick={() => goToNewsSite(news.url)}>
      <div className={index % 2 === 0 ? "flex-left" : "flex-rigth"}>
        <div className="text-container">
          <h2 className="title">{news.title}</h2>
          <p className="paragraph">{news.content.split("[").shift()}</p>
        </div>
        <img src={news.urlToImage} alt="Imagem da notifica" />
      </div>
    </article>
  );
};

const getNews = async (setNews) => {
  const result = await getAllSpaceNews();
  console.log(result.data.articles);
  setNews(result.data.articles.filter((news) => news.content));
};

const goToNewsSite = (link) => {
  console.log(link)
  window.open(link, "_blank");
}

export default NewsLetterPage;
