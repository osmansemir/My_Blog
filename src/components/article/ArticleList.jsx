import { Empty, EmptyDescription, EmptyTitle } from "../ui/empty";
import { ItemGroup, ItemSeparator } from "../ui/item";
import ArticleCard from "./ArticleCard";
import { FilePlus2 } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function ArticleList({ articles, isAdmin = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("articles/new");
  };

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
        {isAdmin && (
          <Button
            onClick={handleClick}
            variant="outline"
            className="border text-lg  flex items-center justify-between h-28 relative"
          >
            <span className="align-middle">Add Article</span>
            <FilePlus2 className="size-8" size={48} />
          </Button>
        )}
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
