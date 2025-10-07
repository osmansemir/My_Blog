import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

const MARKDOWN_COMPONENTS = {
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (!inline && match) {
      return (
        <SyntaxHighlighter
          {...props}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={style}
        />
      );
    }
    return <code {...props}>{children}</code>;
  },
};

function MarkdownDisplay({ markdown }) {
  return (
    <div className="prose dark:prose-invert">
      <article className="mx-auto w-full   ">
        <Markdown remarkPlugins={[remarkGfm]} components={MARKDOWN_COMPONENTS}>
          {markdown}
        </Markdown>
      </article>
    </div>
  );
}

export default MarkdownDisplay;
