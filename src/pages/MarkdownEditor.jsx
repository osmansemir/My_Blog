import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import MarkdownDisplay from "../components/article/MarkdownDisplay";
import { useState, useEffect } from "react";
import ArticleForm from "./ArticleForm";
import { useArticles } from "../hooks/useArticles";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "../components/ui/input";
import { ModeToggle } from "../components/ModeToggle";
import { Label } from "@radix-ui/react-label";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";

function MarkdownEditor() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    markdown: "",
    author: "",
    tags: "",
    description: "",
  });

  const { getArticleBySlug } = useArticles();
  const navigate = useNavigate();

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const article = getArticleBySlug(slug);
      if (article) {
        setFormData(article);
      } else {
        navigate("/404", { replace: true });
      }
    }
  }, [slug]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex font-bold  items-center border-b px-3 h-[160px]">
        <FieldGroup className="w-1/3">
          <Field className="">
            <FieldLabel htmlFor="input-id" className="pl-3">
              Title
            </FieldLabel>
            {/* Input, Select, Switch, etc. */}
            <Input
              placeholder="Title"
              className="w-1/3 wrap-anywhere focus-visible:border-0 focus-visible:ring-0 rounded-none text-2xl border-0 "
              value={formData.title}
            />
            {/* <FieldError>Validation message.</FieldError> */}
          </Field>
          <Field orientation="horizontal" className="ml-3">
            <Button>Save</Button>
            <Button variant="outline" onClick={() => navigate(-1)}>
              Discard
            </Button>
          </Field>
        </FieldGroup>
        <div className="mx-3 grow"></div>
        <ModeToggle />
      </div>
      <ScrollArea className="h-[calc(100vh-184px)]">
        <ResizablePanelGroup direction="horizontal" className="">
          <ResizablePanel>
            {/* Markdown Editor Card */}
            <div className="h-full">
              <Textarea
                className="h-full w-full pb-16 font-mono rounded-none resize-none focus-visible:ring-0 border-0 focus-visible:border-0 "
                placeholder="Type your markdown here..."
                value={formData.markdown}
                onChange={(e) => handleChange("markdown", e.target.value)}
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            {/* Preview Card */}
            <div className="h-full p-3 overflow-y-auto pb-16">
              <MarkdownDisplay markdown={formData.markdown} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ScrollArea>
      <div className="h-6 bg-foreground text-background text-sm align-bottom">
        Words:
      </div>
    </div>
  );
}

export default MarkdownEditor;
