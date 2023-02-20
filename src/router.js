import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import MultiDataForm from "./components/Form/MultiDataForm";
import Layout from "./components/Layout/Layout/Layout";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="/tasks" element={<MultiDataForm />} />
        {/* <Route path="/tasks/:id" element={<NotFound />} />
        <Route path="/tasks/:id/edit" element={<NotFound />} /> */}

        {/* <Route path="/posts" element={<NotFound />} />
        <Route path="/posts/:id" element={<NotFound />} />
        <Route path="/posts/:id/edit" element={<NotFound />} />
        <Route path="/posts/:id/comments" element={<NotFound />} />
        <Route path="/posts/:id/comments/:commetId/edit" element={<NotFound />} /> */}

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
};

export default Router;
