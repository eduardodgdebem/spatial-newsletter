import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import NewsLetterPage from "./pages/newsletter";
import Register from "./pages/register";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newsletter" element={<NewsLetterPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
