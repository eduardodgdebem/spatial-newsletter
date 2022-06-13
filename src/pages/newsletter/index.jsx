import { useEffect, useState } from "react";
import { getAllSpaceNews } from "../../helpers/spaceNewsService";
import "./newsletter.css";

const NewsLetterPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(setNews);
  }, []);

  return (
    <main className="main-container">
      <NewsHeader />
      <article className="news-container">
        {news.map((news, i) => {
          return <NewsContainer news={news} key={i} index={i}></NewsContainer>;
        })}
      </article>
    </main>
  );
};

const NewsHeader = () => {
  return (
    <header className="main-header-container">
      <h1>Jornal.</h1>
    </header>
  );
};

const NewsContainer = (props) => {
  const { news, index } = props;
  const isEven = index % 2 === 0;

  return (
    <article
      className={
        "news-card gradient-hover" + (isEven ? " flex-left" : " flex-rigth") 
      }
      onClick={() => goToNewsSite(news.url)}
    >
      <section className="text-container">
        <h2 className="title">{news.title}</h2>
        <p className="paragraph">{news.content.split("[").shift()}</p>
      </section>
      <img src={news.urlToImage} alt="Imagem da notícia" />
    </article>
  );
};

const getNews = async (setNews) => {
  const result = await getAllSpaceNews();
  setNews(result.data.articles.filter((news) => news.content));
};

const goToNewsSite = (link) => {
  window.open(link, "_blank");
};

export default NewsLetterPage;
