import { ItemActions } from "../ui/item";
import { Button } from "../ui/button";
import { useArticles } from "../../hooks/useArticles";
import AlertAction from "./AlertAction";

function ArtcileActions({ slug }) {
  const { deleteArticle } = useArticles();

  const handleClick = () => {
    console.log("Edit");
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
