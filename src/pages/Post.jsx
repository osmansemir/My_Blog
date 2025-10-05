import MarkdownDisplay from "../components/MarkdownDisplay";
import markdown from "./article.md?raw";

function Post() {
  return (
    <>
      <main className="flex justify-center pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className=" px-4  md:max-w-2xl w-full">
          <MarkdownDisplay markdown={markdown} />
        </div>
      </main>
    </>
  );
}
export default Post;
