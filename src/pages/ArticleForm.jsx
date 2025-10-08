import { useState } from "react";
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
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

function ArticleForm({ formData, setformData, handleChange }) {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  return (
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
  );
}
export default ArticleForm;
