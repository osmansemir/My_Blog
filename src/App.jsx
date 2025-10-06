import Post from "./pages/Post";
import ArticleEdit from "./pages/ArticleEdit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ArticleProvider } from "./context/ArticleContext";

function App() {
  return (
    <>
      <ArticleProvider>
        <Router>
          <Routes>
            <Route path="/blogPost" element={<Post />} />
            <Route path="/admin/articles/new" element={<ArticleEdit />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ArticleProvider>
    </>
  );
}

export default App;
