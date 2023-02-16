import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";

const Router = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  );
};

export default Router;
