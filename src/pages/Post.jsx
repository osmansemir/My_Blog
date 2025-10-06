import MarkdownDisplay from "../components/MarkdownDisplay";
import markdown from "./article.md?raw";
import { useArticles } from "../hooks/useArticles";

function Post() {
  const { articles } = useArticles();
  const article = articles[1];

  if (!article) return <div>Article not found!</div>;
  console.log(articles);
  return (
    <>
      <main className="bg-gray-900 flex justify-center pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className=" px-4  md:max-w-2xl w-full">
          <MarkdownDisplay markdown={article} />
        </div>
      </main>
    </>
  );
}
export default Post;
