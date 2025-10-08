import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <ItemGroup>
      <Item className="px-0">
        <ItemHeader>
          <ItemTitle>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </ItemTitle>
        </ItemHeader>
        <ItemContent>
          {article.description && (
            <ItemDescription>{article.description}</ItemDescription>
          )}
        </ItemContent>
        <ItemFooter>
          <Link to={`/articles/${article.slug}`}>Read more</Link>
        </ItemFooter>
      </Item>
    </ItemGroup>
  );
}

export default ArticleCard;
