import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

const MARKDOWN_CODE = ({ inline, className, children, ...props }) => {
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

  return (
    <code
      className="px-1.5 py-0.5 bg-gray-800 dark:bg-gray-800 text-white dark:text-red-400 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  );
};

const MARKDOWN_COMPONENTS = {
  h1: ({ ...props }) => (
    <h1
      className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="mt-6 mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  h4: ({ ...props }) => (
    <h4
      className="mt-4 mb-2 text-lg font-medium text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
      {...props}
    />
  ),
  a: ({ ...props }) => (
    <a
      className="text-blue-600 hover:underline dark:text-blue-400"
      {...props}
    />
  ),
  img: ({ ...props }) => (
    <img className="rounded-lg shadow-md my-4" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />
  ),
  li: ({ ...props }) => <li className="ml-4" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 my-4"
      {...props}
    />
  ),
  table: ({ ...props }) => (
    <table
      className="w-full border-collapse my-4 text-sm text-left text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  thead: ({ ...props }) => (
    <thead
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  th: ({ ...props }) => (
    <th
      className="px-4 py-2 border dark:border-gray-700 font-semibold"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td className="px-4 py-2 border dark:border-gray-700" {...props} />
  ),
  figure: ({ ...props }) => <figure className="my-6" {...props} />,
  figcaption: ({ ...props }) => (
    <figcaption
      className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
      {...props}
    />
  ),
  code: MARKDOWN_CODE,
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
