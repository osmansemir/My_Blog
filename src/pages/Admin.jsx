import ArticleList from "../components/article/ArticleList";
import { useArticles } from "../hooks/useArticles.jsx";

function Admin() {
  const { articles } = useArticles();
  const isAdmin = true;

  return (
    <main className="overflow-y-auto flex-1 md:max-w-2xl px-4 mx-auto pt-16">
      <ArticleList articles={articles} isAdmin={isAdmin}></ArticleList>
    </main>
  );
}
export default Admin;
