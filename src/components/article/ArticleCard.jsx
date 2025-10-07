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
      <Item>
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
      </Item>
    </ItemGroup>
  );
}

export default ArticleCard;
