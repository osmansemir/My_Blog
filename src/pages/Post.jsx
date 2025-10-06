import MarkdownDisplay from "../components/article/MarkdownDisplay";
import { useArticles } from "../hooks/useArticles";

function Post() {
  const { articles } = useArticles();
  const article = articles[Math.floor(Math.random() * articles.length)];

  if (!article) return <div>Article not found!</div>;
  return (
    <>
      <main className=" flex justify-center pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900 antialiased">
        <div className=" px-4  md:max-w-2xl w-full">
          <MarkdownDisplay markdown={article.markdown} />
        </div>
      </main>
    </>
  );
}

export default Post;
