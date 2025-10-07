import { ItemGroup, ItemSeparator } from "../ui/item";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <>
      <ItemGroup>
        {articles.map((article, index) => (
          <>
            <ArticleCard article={article} />
            {index !== articles.length - 1 && <ItemSeparator />}
          </>
        ))}
      </ItemGroup>
    </>
  );
}

export default ArticleList;
