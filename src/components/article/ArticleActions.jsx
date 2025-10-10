import { ItemActions } from "../ui/item";
import { Button } from "../ui/button";
import { useArticles } from "../../hooks/useArticles";
import AlertAction from "./AlertAction";
import { useNavigate } from "react-router-dom";

function ArtcileActions({ slug }) {
  const { deleteArticle } = useArticles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/articles/edit/${slug}`);
  };

  return (
    <ItemActions>
      <Button onClick={() => handleClick()} size="sm" className="">
        Edit
      </Button>
      <AlertAction slug={slug} action={deleteArticle}>
        <Button size="sm" className="">
          Delete
        </Button>
      </AlertAction>
    </ItemActions>
  );
}

export default ArtcileActions;
