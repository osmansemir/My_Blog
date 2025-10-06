// src/context/ArticleContext.jsx
import { createContext, useState } from "react";
import { mockArticles } from "../utils/mockData";

// Create the context
export const ArticleContext = createContext();

// Provider component
export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState(mockArticles);

  // Add new article
  const addArticle = (newArticle) => {
    // ✅ Create new array with spread operator (don't mutate!)
    setArticles([...articles, newArticle]);
  };

  // Update existing articleexport
  const updateArticle = (slug, updatedData) => {
    // ✅ Map creates a new array
    setArticles(
      articles.map((article) =>
        article.slug === slug ? { ...article, ...updatedData } : article,
      ),
    );
  };

  // Delete article
  const deleteArticle = (slug) => {
    // ✅ Filter creates a new array
    setArticles(articles.filter((article) => article.slug !== slug));
  };

  // Get single article by slug
  const getArticleBySlug = (slug) => {
    return articles.find((article) => article.slug === slug);
  };

  // Get articles by tag
  const getArticlesByTag = (tag) => {
    return articles.filter((article) =>
      article.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
    );
  };

  // Get featured articles
  const getFeaturedArticles = () => {
    return articles.filter((article) => article.featured);
  };

  // Get related articles (based on shared tags)
  const getRelatedArticles = (currentSlug, limit = 4) => {
    const currentArticle = articles.find((a) => a.slug === currentSlug);
    if (!currentArticle) return [];

    return articles
      .filter((article) => article.slug !== currentSlug)
      .filter((article) =>
        article.tags.some((tag) => currentArticle.tags.includes(tag)),
      )
      .slice(0, limit);
  };

  // Search articles by title or description
  const searchArticles = (query) => {
    const lowerQuery = query.toLowerCase();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.description.toLowerCase().includes(lowerQuery) ||
        article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    );
  };

  // Get all unique tags
  const getAllTags = () => {
    const tagSet = new Set();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  // Context value with all functions
  const value = {
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleBySlug,
    getArticlesByTag,
    getFeaturedArticles,
    getRelatedArticles,
    searchArticles,
    getAllTags,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}
