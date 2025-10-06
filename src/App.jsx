import Post from "./pages/Post";
import ArticleEdit from "./pages/ArticleEdit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ArticleProvider } from "./context/ArticleContext";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <ArticleProvider>
        <Router>
          <Routes>
            <Route
              path="/blogPost"
              element={
                <Layout>
                  <Post />
                </Layout>
              }
            />
            <Route
              path="/admin/articles/new"
              element={
                <Layout>
                  <ArticleEdit />
                </Layout>
              }
            />
            <Route
              path="/*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </ArticleProvider>
    </>
  );
}

export default App;
