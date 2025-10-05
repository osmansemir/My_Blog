import Header from "./components/Header";
import Post from "./pages/Post";
import ArticleEdit from "./pages/ArticleEdit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/blogPost"
            element={
              <>
                <Post />
              </>
            }
          />
          <Route path="/admin/articles/new" element={<ArticleEdit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
