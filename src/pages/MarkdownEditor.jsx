import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import MarkdownDisplay from "../components/article/MarkdownDisplay";
import { useState, useParams } from "react";
import ArticleForm from "./ArticleForm";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function MarkdownEditor() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    markdown: "",
    author: "",
    tags: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="">
      <ResizablePanelGroup
        direction="horizontal"
        className="grid grid-cols-1 md:grid-cols-2  "
      >
        <ResizablePanel>
          {/* Markdown Editor Card */}
          <div className="px-0 md:col-span-1 md:h-screen ml-3">
            <h1>Markdown Editor</h1>
            <div className="h-[calc(100%-20px)]">
              <Textarea
                className="h-full w-full font-mono rounded-none resize-none focus-visible:ring-0 outline-none border-inherit focus-visible:border-inherit "
                placeholder="Type your markdown here..."
                value={formData.markdown}
                onChange={(e) => handleChange("markdown", e.target.value)}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          {/* Preview Card */}
          <div className="md:col-span-1 md:h-screen mr-3">
            <h1>Preview</h1>
            <div className="h-[calc(100%-20px)] overflow-y-auto">
              <MarkdownDisplay markdown={formData.markdown} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MarkdownEditor;

const some = `



placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/20
dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex
field-sizing-content min-h-16 border bg-transparent px-3 py-2 text-base transition-[color,box-shadow]
focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-full font-mono rounded-none
resize-none w-full focus-visible:outline-none border-inherit focus-visible:border-inherit focus:ring-0 ring-0 inset-ring-0
inset-shadow-none shadow-none focus:outline-none outline-none





h-full w-full font-mono rounded-none resize-none focus-visible:ring-0 

`;
