import { FilePlus2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function NewArticleButton() {
  return (
    <Link to="articles/new">
      <Button
        variant="outline"
        className="w-full cursor-pointer border text-lg  flex items-center justify-between h-28 relative"
      >
        <span className="align-middle">Add Article</span>
        <FilePlus2 className="size-8" size={48} />
      </Button>
    </Link>
  );
}
export default NewArticleButton;
