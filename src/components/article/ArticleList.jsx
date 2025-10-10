import { Empty, EmptyDescription, EmptyTitle } from "../ui/empty";
import { ItemGroup, ItemSeparator } from "../ui/item";
import ArticleCard from "./ArticleCard";
import NewArticleButton from "./NewArticleButton";

function ArticleList({ articles, isAdmin = false }) {
  return (
    <>
      {articles.length === 0 && (
        <Empty>
          <EmptyTitle>No Articles yet</EmptyTitle>
          <EmptyDescription>
            You can start creating articles to display them here.
          </EmptyDescription>
        </Empty>
      )}
      <ItemGroup>
        {isAdmin && <NewArticleButton />}
        {articles.map((article, index) => (
          <>
            <ArticleCard
              key={article.slug}
              article={article}
              isAdmin={isAdmin}
            />
            {index !== articles.length - 1 && <ItemSeparator />}
          </>
        ))}
      </ItemGroup>
    </>
  );
}

export default ArticleList;
