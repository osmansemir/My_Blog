import Header from "./components/Header";
import Post from "./pages/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [theme, setTheme] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/blogPost"
            element={
              <>
                <Header />
                <Post />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
