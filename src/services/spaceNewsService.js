export const getAllSpaceNews = () => {
  return fetch({
    url: "https://space-news.p.rapidapi.com/news/guardian",
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "space-news.p.rapidapi.com",
      "X-RapidAPI-Key": "a5084dc79fmsh75fc25c3517d33ap15deffjsn3beba73b36fe",
    },
  });
}; 