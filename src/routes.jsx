import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import NewsLetterPage from "./pages/newsletter";
import NotFound from "./pages/notFound";
import Register from "./pages/register";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newsletter" element={<NewsLetterPage />}></Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
