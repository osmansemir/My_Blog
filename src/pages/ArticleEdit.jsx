import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import MarkdownDisplay from "../components/MarkdownDisplay";
import { useState } from "react";

function ArticleEdit() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    markdown: "",
    author: "",
    tags: "",
    description: "",
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-500">
      {/* Title & Slug Card */}
      <Card className="col-span-2 m-3">
        <CardHeader>
          <CardTitle>Edit Article</CardTitle>
          <CardDescription>Edit your article details</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {/* Title Input */}
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={formData.title}
                  placeholder="Get Started with React"
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    handleChange("title", newTitle);
                    handleChange("slug", generateSlug(newTitle));
                  }}
                  required
                />
              </div>

              {/* Slug Input */}
              <div className="grid gap-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  type="text"
                  value={formData.slug}
                  onChange={(e) => handleChange("slug", e.target.value)}
                  placeholder="get-started-with-react"
                />
              </div>

              {/* Author */}
              <div className="grid gap-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleChange("author", e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              {/* Tags */}
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  type="text"
                  value={formData.tags}
                  onChange={(e) => handleChange("tags", e.target.value)}
                  placeholder="react, tutorial, beginners"
                />
              </div>

              {/* Description */}
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Brief summary of your article..."
                  rows={3}
                />
              </div>
            </div>
          </form>

          {/* Debug Output */}
          <pre className="mt-4 p-2 bg-gray-100 rounded text-xs">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button type="button" onClick={() => console.log("Save:", formData)}>
            Save Draft
          </Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </CardFooter>
      </Card>

      {/* Markdown Editor Card */}
      <Card className="md:col-span-1 md:h-screen ml-3">
        <CardHeader>
          <CardTitle>Markdown Editor</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(100%-80px)]">
          <Textarea
            className="h-full font-mono"
            placeholder="Type your markdown here..."
            value={formData.markdown}
            onChange={(e) => handleChange("markdown", e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Preview Card */}
      <Card className="md:col-span-1 md:h-screen mr-3">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(100%-80px)] overflow-y-auto">
          <MarkdownDisplay markdown={formData.markdown} />
        </CardContent>
      </Card>
    </div>
  );
}

export default ArticleEdit;
