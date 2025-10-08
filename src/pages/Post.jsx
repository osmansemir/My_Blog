import MarkdownDisplay from "../components/article/MarkdownDisplay";
import { useArticles } from "../hooks/useArticles";
import { unstable_usePrompt, useParams } from "react-router-dom";

function Post() {
  const { articles, getArticleBySlug } = useArticles();
  // const article = articles[Math.floor(Math.random() * articles.length)];
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <div>Article not found!</div>;
  return (
    <>
      <main className=" flex justify-center pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased overflow-y-auto">
        <div className=" px-4  md:max-w-2xl w-full">
          <MarkdownDisplay markdown={article.markdown} />
        </div>
      </main>
    </>
  );
}

export default Post;
