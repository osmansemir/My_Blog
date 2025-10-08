import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../../hooks/useTheme";

function MarkdownDisplay({ markdown }) {
  const { theme } = useTheme();
  const style = theme === "light" ? gruvboxLight : atomDark;

  const components = {
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
            showLineNumbers="true"
            // customStyle="bg-background"
          />
        );
      }
      return <code {...props}>{children}</code>;
    },
  };

  return (
    <div className="prose xl:prose-xl prose-pre:bg-[#F9F5D7] dark:prose-pre:bg-[#1D1F21] dark:prose-invert">
      <article className="mx-auto w-full   ">
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {markdown}
        </Markdown>
      </article>
    </div>
  );
}

export default MarkdownDisplay;
