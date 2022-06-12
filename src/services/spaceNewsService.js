import axios from "axios";

export const getAllSpaceNews = () => {
  return axios.request({
		method: 'GET',
		url: 'https://newsapi.org/v2/top-headlines?' +
		'country=us&' +
		'apiKey=230ad235f667400caa2d242f4ff666a7'
	});
}; 