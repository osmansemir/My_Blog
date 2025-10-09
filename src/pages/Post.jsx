import { useEffect } from "react";
import MarkdownDisplay from "../components/article/MarkdownDisplay";
import { useArticles } from "../hooks/useArticles";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const { getArticleBySlug } = useArticles();
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!article) navigate("/404", { replace: true });
  });

  if (!article) return <div>Article not found!</div>;
  return (
    <>
      <main className=" flex justify-center pt-8 pb-6 lg:pt-16 lg:pb-24 antialiased overflow-y-auto">
        <div className=" px-4  md:max-w-2xl w-full">
          <MarkdownDisplay markdown={article.markdown} />
        </div>
      </main>
    </>
  );
}

export default Post;
