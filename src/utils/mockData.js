// src/utils/mockData.js

export const mockArticles = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    slug: "getting-started-react-hooks",
    author: "Sarah Johnson",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks", "Tutorial"],
    description:
      "Learn the fundamentals of React Hooks and how they revolutionize state management in functional components.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
    featured: true,
    markdown: `# Getting Started with React Hooks

React Hooks have transformed the way we write React components. In this comprehensive guide, we'll explore the most commonly used hooks and best practices.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 to solve several problems:

- Reusing stateful logic between components
- Complex components becoming hard to understand
- Classes being confusing for both humans and machines

## The useState Hook

The most basic hook is \`useState\`, which allows you to add state to functional components:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## The useEffect Hook

\`useEffect\` lets you perform side effects in function components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]); // Only re-run if userId changes
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
\`\`\`

## Best Practices

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call them from functional components or custom hooks
3. **Use the ESLint plugin** - It helps enforce these rules automatically

## Conclusion

React Hooks provide a more direct API to the React concepts you already know. Start with \`useState\` and \`useEffect\`, and gradually explore other hooks as your needs grow.`,
  },
  {
    id: "2",
    title: "Building Scalable Web Applications",
    slug: "building-scalable-web-applications",
    author: "Michael Chen",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    date: "2024-03-10",
    readTime: "12 min read",
    tags: ["Architecture", "Web Development", "Best Practices"],
    description:
      "Discover architectural patterns and strategies for building web applications that scale efficiently.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
    featured: true,
    markdown: `# Building Scalable Web Applications

Scalability is crucial for modern web applications. This guide covers key principles and patterns for building apps that grow with your user base.

## Understanding Scalability

Scalability refers to a system's ability to handle increased load without compromising performance. There are two main types:

### Vertical Scaling (Scaling Up)
Adding more power to existing machines - more CPU, RAM, or storage.

### Horizontal Scaling (Scaling Out)
Adding more machines to distribute the load.

## Key Architectural Patterns

### 1. Microservices Architecture

Break your application into smaller, independent services:

\`\`\`javascript
// User Service
app.post('/api/users', createUser);
app.get('/api/users/:id', getUser);

// Order Service  
app.post('/api/orders', createOrder);
app.get('/api/orders/:id', getOrder);
\`\`\`

**Benefits:**
- Independent deployment
- Technology flexibility
- Better fault isolation

### 2. Caching Strategy

Implement caching at multiple levels:

\`\`\`javascript
// Redis cache example
const cachedUser = await redis.get(\`user:\${userId}\`);
if (cachedUser) return JSON.parse(cachedUser);

const user = await db.users.findById(userId);
await redis.set(\`user:\${userId}\`, JSON.stringify(user), 'EX', 3600);
return user;
\`\`\`

### 3. Load Balancing

Distribute traffic across multiple servers to prevent bottlenecks.

## Database Optimization

1. **Indexing** - Speed up queries with proper indexes
2. **Query optimization** - Use EXPLAIN to analyze slow queries
3. **Connection pooling** - Reuse database connections
4. **Read replicas** - Separate read and write operations

## Frontend Performance

- **Code splitting** - Load only what's needed
- **Lazy loading** - Defer loading of non-critical resources
- **CDN usage** - Serve static assets from edge locations
- **Image optimization** - Use modern formats like WebP

## Monitoring and Observability

You can't scale what you can't measure:

- Application Performance Monitoring (APM)
- Error tracking and logging
- Real-time metrics and dashboards
- Distributed tracing

## Conclusion

Building scalable applications requires planning, the right architecture, and continuous monitoring. Start with these patterns and adapt them to your specific needs.`,
  },
  {
    id: "3",
    title: "Modern CSS: Grid and Flexbox",
    slug: "modern-css-grid-flexbox",
    author: "Emma Wilson",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    date: "2024-03-05",
    readTime: "10 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    description:
      "Master modern CSS layout techniques with CSS Grid and Flexbox for responsive web design.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png",
    featured: false,
    markdown: `# Modern CSS: Grid and Flexbox

CSS Grid and Flexbox are powerful tools for creating modern, responsive layouts. Let's explore when and how to use each.

## Flexbox: One-Dimensional Layouts

Flexbox excels at distributing space along a single axis (row or column).

### Basic Flexbox Example

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1; /* Equal width items */
}
\`\`\`

### Common Flexbox Patterns

**Navigation Bar:**
\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

**Card Layout:**
\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
\`\`\`

## CSS Grid: Two-Dimensional Layouts

Grid is perfect for complex layouts with rows and columns.

### Basic Grid Example

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Responsive grid */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

### Advanced Grid Techniques

**Named Grid Areas:**
\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`

## When to Use What?

| Use Case | Choose |
|----------|--------|
| Navigation menus | Flexbox |
| Card layouts | Flexbox or Grid |
| Page layouts | Grid |
| Centering content | Flexbox |
| Magazine-style layouts | Grid |

## Combining Grid and Flexbox

The real power comes from using them together:

\`\`\`css
/* Grid for page layout */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
}

/* Flexbox for sidebar items */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
\`\`\`

## Conclusion

Master both Grid and Flexbox to handle any layout challenge. Grid for two-dimensional layouts, Flexbox for one-dimensional ones, and combine them for the best results.`,
  },
  {
    id: "4",
    title: "Introduction to TypeScript",
    slug: "introduction-typescript",
    author: "David Kumar",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: "2024-02-28",
    readTime: "15 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    description:
      "A comprehensive introduction to TypeScript and how it improves JavaScript development.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png",
    featured: false,
    markdown: `# Introduction to TypeScript

TypeScript adds static typing to JavaScript, catching errors before runtime and improving code quality.

## Why TypeScript?

JavaScript is dynamically typed, which is flexible but error-prone:

\`\`\`javascript
// JavaScript - no error until runtime
function add(a, b) {
  return a + b;
}

add(5, "10"); // "510" - unexpected!
\`\`\`

TypeScript catches this at compile time:

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

add(5, "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
\`\`\`

## Basic Types

\`\`\`typescript
// Primitives
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Objects
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe"
};
\`\`\`

## Interfaces vs Types

Both define object shapes, with subtle differences:

\`\`\`typescript
// Interface
interface Person {
  name: string;
  age: number;
}

// Type alias
type Person = {
  name: string;
  age: number;
}

// Type can do unions
type Status = "pending" | "approved" | "rejected";
\`\`\`

## Generics

Write reusable, type-safe code:

\`\`\`typescript
// Generic function
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3]); // number | undefined
const firstString = getFirst(["a", "b"]); // string | undefined

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
};
\`\`\`

## Utility Types

TypeScript includes helpful utility types:

\`\`\`typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - all properties optional
type PartialTodo = Partial<Todo>;

// Pick - select specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit - exclude properties
type TodoWithoutCompleted = Omit<Todo, "completed">;

// Readonly - immutable
type ReadonlyTodo = Readonly<Todo>;
\`\`\`

## Best Practices

1. **Enable strict mode** in tsconfig.json
2. **Avoid \`any\`** - use \`unknown\` when type is truly unknown
3. **Use interfaces** for object shapes
4. **Leverage type inference** - don't over-annotate
5. **Define return types** for functions

## Conclusion

TypeScript improves code quality, catches bugs early, and enhances developer experience with better autocomplete and refactoring tools. The learning curve is worth it!`,
  },
  {
    id: "5",
    title: "API Design Best Practices",
    slug: "api-design-best-practices",
    author: "Lisa Anderson",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "2024-02-20",
    readTime: "11 min read",
    tags: ["API", "Backend", "REST", "Best Practices"],
    description:
      "Learn how to design clean, maintainable, and user-friendly REST APIs.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
    featured: false,
    markdown: `# API Design Best Practices

Well-designed APIs are intuitive, consistent, and easy to use. Let's explore the principles of great API design.

## RESTful Principles

### Use Proper HTTP Methods

\`\`\`
GET    /api/users          - List users
GET    /api/users/123      - Get specific user
POST   /api/users          - Create user
PUT    /api/users/123      - Update user (full)
PATCH  /api/users/123      - Update user (partial)
DELETE /api/users/123      - Delete user
\`\`\`

### Resource Naming

Use **nouns** for resources, not verbs:

✅ Good:
\`\`\`
GET /api/articles
POST /api/articles
\`\`\`

❌ Bad:
\`\`\`
GET /api/getArticles
POST /api/createArticle
\`\`\`

## Response Format

Consistent JSON responses:

\`\`\`json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Hello World",
    "author": "John Doe"
  },
  "meta": {
    "timestamp": "2024-03-15T10:30:00Z"
  }
}
\`\`\`

### Error Responses

\`\`\`json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ]
  }
}
\`\`\`

## HTTP Status Codes

Use appropriate status codes:

| Code | Meaning | Use Case |
|------|---------|----------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Missing/invalid auth |
| 403 | Forbidden | Authenticated but no permission |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Something went wrong |

## Versioning

Always version your API:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

Or use headers:
\`\`\`
Accept: application/vnd.api+json;version=1
\`\`\`

## Pagination

For large datasets, implement pagination:

\`\`\`javascript
// Request
GET /api/articles?page=2&limit=20

// Response
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": true
  }
}
\`\`\`

## Filtering and Sorting

\`\`\`
GET /api/articles?status=published&sort=-createdAt&author=john
\`\`\`

## Authentication

Use Bearer tokens:

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
\`\`\`

## Rate Limiting

Return rate limit info in headers:

\`\`\`
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1619827200
\`\`\`

## Documentation

- Use OpenAPI/Swagger
- Provide code examples
- Include authentication details
- Show request/response examples

## Security Checklist

- ✅ Use HTTPS only
- ✅ Validate all inputs
- ✅ Implement rate limiting
- ✅ Use authentication
- ✅ Sanitize error messages (don't leak internal info)
- ✅ Keep dependencies updated

## Conclusion

Great API design is about consistency, clarity, and thinking from the user's perspective. Follow these principles to create APIs that developers love to use.`,
  },
  {
    id: "6",
    title: "Understanding Async/Await in JavaScript",
    slug: "understanding-async-await-javascript",
    author: "Alex Martinez",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    date: "2024-02-15",
    readTime: "9 min read",
    tags: ["JavaScript", "Async", "Programming"],
    description:
      "Master asynchronous JavaScript with async/await for cleaner, more readable code.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
    featured: false,
    markdown: `# Understanding Async/Await in JavaScript

Async/await makes asynchronous code look and behave like synchronous code, making it easier to read and maintain.

## The Problem with Callbacks

Callback hell makes code hard to read:

\`\`\`javascript
fetchUser(userId, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      // Finally do something
      console.log(comments);
    });
  });
});
\`\`\`

## Promises Improved Things

\`\`\`javascript
fetchUser(userId)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.error(error));
\`\`\`

## Async/Await Makes It Even Better

\`\`\`javascript
async function getData(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## How Async/Await Works

The \`async\` keyword makes a function return a Promise:

\`\`\`javascript
async function hello() {
  return "Hello";
}

// Same as:
function hello() {
  return Promise.resolve("Hello");
}
\`\`\`

The \`await\` keyword pauses execution until the Promise resolves:

\`\`\`javascript
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}
\`\`\`

## Error Handling

Use try/catch for errors:

\`\`\`javascript
async function getData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('HTTP error');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error; // Re-throw if needed
  }
}
\`\`\`

## Parallel Execution

Don't await unnecessarily - run requests in parallel:

❌ Sequential (slow):
\`\`\`javascript
const user = await fetchUser(id);
const posts = await fetchPosts(id);
const comments = await fetchComments(id);
\`\`\`

✅ Parallel (fast):
\`\`\`javascript
const [user, posts, comments] = await Promise.all([
  fetchUser(id),
  fetchPosts(id),
  fetchComments(id)
]);
\`\`\`

## Common Patterns

### API Request with Timeout

\`\`\`javascript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { 
      signal: controller.signal 
    });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
}
\`\`\`

### Retry Logic

\`\`\`javascript
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
\`\`\`

## Best Practices

1. **Always handle errors** with try/catch
2. **Avoid unnecessary awaits** - run independent calls in parallel
3. **Don't use async without await** - it's unnecessary
4. **Return early** to avoid deep nesting
5. **Use Promise.all** for parallel operations

## Conclusion

Async/await is syntactic sugar over Promises that makes asynchronous code more readable and maintainable. Master it to write better JavaScript!`,
  },
  {
    id: "7",
    title: "Git Workflow Best Practices",
    slug: "git-workflow-best-practices",
    author: "Rachel Green",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    date: "2024-02-10",
    readTime: "13 min read",
    tags: ["Git", "DevOps", "Workflow"],
    description:
      "Establish efficient Git workflows for better team collaboration and code management.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png",
    featured: false,
    markdown: `# Git Workflow Best Practices

A solid Git workflow improves collaboration, prevents conflicts, and makes code reviews more effective.

## Branch Naming Conventions

Use descriptive, consistent names:

\`\`\`
main/master          - Production-ready code
develop              - Integration branch
feature/user-auth    - New features
bugfix/login-error   - Bug fixes
hotfix/security-patch - Urgent production fixes
release/v1.2.0       - Release preparation
\`\`\`

## Feature Branch Workflow

### 1. Create a Feature Branch

\`\`\`bash
git checkout develop
git pull origin develop
git checkout -b feature/add-comments
\`\`\`

### 2. Work and Commit Regularly

\`\`\`bash
git add .
git commit -m "feat: add comment form component"
git commit -m "feat: implement comment submission"
git commit -m "test: add comment form tests"
\`\`\`

### 3. Keep Branch Updated

\`\`\`bash
git checkout develop
git pull origin develop
git checkout feature/add-comments
git rebase develop
\`\`\`

### 4. Push and Create PR

\`\`\`bash
git push origin feature/add-comments
# Create Pull Request on GitHub/GitLab
\`\`\`

## Commit Message Conventions

Follow the Conventional Commits format:

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### Types:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Formatting (no code change)
- **refactor**: Code restructuring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples:

\`\`\`
feat(auth): add social login support

fix(api): resolve timeout issue in user endpoint

docs(readme): update installation instructions

refactor(utils): simplify date formatting function
\`\`\`

## Git Commands Cheat Sheet

### Basic Operations
\`\`\`bash
# Check status
git status

# View commit history
git log --oneline --graph

# View changes
git diff

# Discard changes
git checkout -- file.js
git restore file.js  # New syntax
\`\`\`

### Branch Management
\`\`\`bash
# List branches
git branch -a

# Delete local branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature

# Rename branch
git branch -m old-name new-name
\`\`\`

### Undoing Changes
\`\`\`bash
# Amend last commit
git commit --amend

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (create new commit)
git revert <commit-hash>
\`\`\`

## Merge vs Rebase

### Merge
Creates a merge commit, preserves history:

\`\`\`bash
git checkout develop
git merge feature/add-comments
\`\`\`

**Pros**: Complete history, safe
**Cons**: Cluttered history with merge commits

### Rebase
Replays commits on top of another branch:

\`\`\`bash
git checkout feature/add-comments
git rebase develop
\`\`\`

**Pros**: Clean, linear history
**Cons**: Rewrites history (never rebase public branches!)

## Pull Request Best Practices

1. **Small, focused PRs** - Easier to review
2. **Write descriptive titles and descriptions**
3. **Link related issues** - "Fixes #123"
4. **Request specific reviewers**
5. **Respond to feedback promptly**
6. **Keep PR updated** with target branch

### Good PR Description Template

\`\`\`markdown
## Description
Brief description of changes

## Changes
- Added user authentication
- Implemented JWT tokens
- Created login/signup forms

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] No console errors

## Screenshots
[If applicable]

## Related Issues
Fixes #123
\`\`\`

## Git Hooks

Automate checks before commits:

\`\`\`bash
# .git/hooks/pre-commit
#!/bin/sh
npm run lint
npm test
\`\`\`

Use tools like Husky to manage hooks:

\`\`\`json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
\`\`\`

## Handling Conflicts

\`\`\`bash
# When conflict occurs during merge/rebase
git status  # See conflicted files

# Edit files to resolve conflicts
# Look for <<<<<<< ======= >>>>>>> markers

# After resolving
git add .
git rebase --continue  # If rebasing
git commit  # If merging
\`\`\`

## Best Practices Summary

1. ✅ **Commit often** with clear messages
2. ✅ **Pull before pushing** to avoid conflicts
3. ✅ **Use feature branches** for all work
4. ✅ **Review code** before merging
5. ✅ **Keep commits atomic** - one logical change per commit
6. ✅ **Never force push** to shared branches
7. ✅ **Delete merged branches** to keep repo clean
8. ✅ **Use .gitignore** properly

## Conclusion

Good Git practices make collaboration smoother and codebases more maintainable. Establish these patterns early and stick to them!`,
  },
  {
    id: "8",
    title: "Docker for Developers",
    slug: "docker-for-developers",
    author: "Tom Wilson",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: "2024-02-05",
    readTime: "14 min read",
    tags: ["Docker", "DevOps", "Containers"],
    description:
      "Learn Docker fundamentals and how to containerize your applications for consistent development environments.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png",
    featured: false,
    markdown: `# Docker for Developers

Docker solves the "it works on my machine" problem by containerizing applications with all their dependencies.

## What is Docker?

Docker packages applications into **containers** - lightweight, standalone packages that include everything needed to run: code, runtime, libraries, and dependencies.

### Benefits
- **Consistency** across environments
- **Isolation** between applications
- **Portability** - run anywhere
- **Efficiency** - lighter than VMs
- **Scalability** - easy to replicate

## Core Concepts

### Images
Read-only templates for creating containers. Like a class in OOP.

### Containers
Running instances of images. Like objects instantiated from a class.

### Dockerfile
Instructions for building an image.

### Docker Compose
Tool for defining multi-container applications.

## Your First Dockerfile

\`\`\`dockerfile
# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
\`\`\`

Build and run:

\`\`\`bash
# Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app

# Run in background
docker run -d -p 3000:3000 my-app
\`\`\`

## Multi-Stage Builds

Optimize image size with multi-stage builds:

\`\`\`dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]
\`\`\`

## Docker Compose

Define multi-container apps:

\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db
      - redis
    volumes:
      - ./src:/app/src  # Hot reload in dev
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp
    volumes:
      - postgres-data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres-data:
\`\`\`

Run with:
\`\`\`bash
docker-compose up
docker-compose up -d  # Background
docker-compose down   # Stop and remove
\`\`\`

## Essential Commands

### Container Management
\`\`\`bash
# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# View logs
docker logs <container-id>
docker logs -f <container-id>  # Follow

# Execute command in container
docker exec -it <container-id> sh
\`\`\`

### Image Management
\`\`\`bash
# List images
docker images

# Remove image
docker rmi <image-id>

# Pull image
docker pull nginx:latest

# Tag image
docker tag my-app:latest my-app:v1.0

# Push to registry
docker push myusername/my-app:latest
\`\`\`

### Cleanup
\`\`\`bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove everything unused
docker system prune -a

# View disk usage
docker system df
\`\`\`

## Best Practices

### 1. Use Official Base Images
\`\`\`dockerfile
FROM node:18-alpine  # Official + minimal
\`\`\`

### 2. Optimize Layer Caching
\`\`\`dockerfile
# Copy package files first
COPY package*.json ./
RUN npm install

# Then copy source code
COPY . .
\`\`\`

### 3. Use .dockerignore
\`\`\`
node_modules
npm-debug.log
.env
.git
.gitignore
README.md
.vscode
\`\`\`

### 4. Run as Non-Root User
\`\`\`dockerfile
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
\`\`\`

### 5. Use Health Checks
\`\`\`dockerfile
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1
\`\`\`

## Development vs Production

### Development
\`\`\`yaml
services:
  app:
    build:
      context: .
      target: development
    volumes:
      - ./src:/app/src  # Hot reload
    environment:
      - NODE_ENV=development
\`\`\`

### Production
\`\`\`dockerfile
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
\`\`\`

## Common Patterns

### Database with Persistent Data
\`\`\`yaml
services:
  db:
    image: postgres:15-alpine
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
      - postgres-data:/var/lib/postgresql/data
\`\`\`

### Environment Variables
\`\`\`yaml
services:
  app:
    env_file:
      - .env
    environment:
      - API_KEY=${API_KEY}
      - DEBUG=true
\`\`\`

### Networking
\`\`\`yaml
services:
  app:
    networks:
      - frontend
      - backend
  
  db:
    networks:
      - backend

networks:
  frontend:
  backend:
\`\`\`

## Debugging Tips

### 1. Interactive Shell
\`\`\`bash
docker run -it my-app sh
\`\`\`

### 2. Inspect Image Layers
\`\`\`bash
docker history my-app
\`\`\`

### 3. Check Resource Usage
\`\`\`bash
docker stats
\`\`\`

### 4. View Container Details
\`\`\`bash
docker inspect <container-id>
\`\`\`

## Conclusion

Docker streamlines development by ensuring consistency across environments. Start with simple Dockerfiles, then explore Docker Compose for multi-container apps. The investment in learning Docker pays off in reduced "works on my machine" issues!`,
  },
  {
    id: "9",
    title: "Web Performance Optimization",
    slug: "web-performance-optimization",
    author: "Jennifer Lee",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "2024-01-30",
    readTime: "16 min read",
    tags: ["Performance", "Web Development", "Optimization"],
    description:
      "Techniques and strategies to make your web applications faster and more responsive.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
    featured: true,
    markdown: `# Web Performance Optimization

Every millisecond counts. Faster websites provide better user experience, higher conversion rates, and improved SEO rankings.

## Why Performance Matters

- **53% of users** abandon sites that take over 3 seconds to load
- **1 second delay** can reduce conversions by 7%
- Google uses **page speed** as a ranking factor

## Measuring Performance

### Core Web Vitals

1. **LCP (Largest Contentful Paint)** - Loading performance (< 2.5s)
2. **FID (First Input Delay)** - Interactivity (< 100ms)
3. **CLS (Cumulative Layout Shift)** - Visual stability (< 0.1)

### Tools
- **Lighthouse** - Chrome DevTools
- **WebPageTest** - Detailed analysis
- **GTmetrix** - Performance insights
- **Chrome User Experience Report** - Real user data

## Frontend Optimization

### 1. Optimize Images

Images often account for 50%+ of page weight.

**Use modern formats:**
\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Fallback">
</picture>
\`\`\`

**Lazy loading:**
\`\`\`html
<img src="image.jpg" loading="lazy" alt="Description">
\`\`\`

**Responsive images:**
\`\`\`html
<img 
  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  src="medium.jpg" 
  alt="Description"
>
\`\`\`

### 2. Code Splitting

Load only what's needed:

\`\`\`javascript
// React lazy loading
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

**Route-based splitting:**
\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./pages/Dashboard'))
  },
  {
    path: '/profile',
    component: lazy(() => import('./pages/Profile'))
  }
];
\`\`\`

### 3. Minimize JavaScript

**Tree shaking** - Remove unused code:
\`\`\`javascript
// Bad - imports entire library
import _ from 'lodash';

// Good - imports only what's needed
import debounce from 'lodash/debounce';
\`\`\`

**Defer non-critical JS:**
\`\`\`html
<script src="analytics.js" defer></script>
<script src="chat-widget.js" async></script>
\`\`\`

### 4. CSS Optimization

**Critical CSS** - Inline above-the-fold styles:
\`\`\`html
<head>
  <style>
    /* Critical CSS here */
    .header { ... }
  </style>
  <link rel="preload" href="main.css" as="style">
  <link rel="stylesheet" href="main.css">
</head>
\`\`\`

**Remove unused CSS:**
Use tools like PurgeCSS:
\`\`\`javascript
// PostCSS config
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.jsx']
    })
  ]
};
\`\`\`

### 5. Resource Hints

Help browsers prioritize resource loading:

\`\`\`html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://api.example.com">

<!-- Prefetch resources for next page -->
<link rel="prefetch" href="/next-page.js">

<!-- Preload critical resources -->
<link rel="preload" href="font.woff2" as="font" crossorigin>

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://analytics.com">
\`\`\`

## Backend Optimization

### 1. Caching Strategies

**HTTP Caching:**
\`\`\`javascript
// Express.js example
app.use((req, res, next) => {
  if (req.url.match(/\\.(js|css|png|jpg)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  next();
});
\`\`\`

**Redis caching:**
\`\`\`javascript
async function getUser(id) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);
  
  const user = await db.users.findById(id);
  await redis.set(\`user:\${id}\`, JSON.stringify(user), 'EX', 3600);
  return user;
}
\`\`\`

### 2. Database Optimization

**Indexing:**
\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);
\`\`\`

**Query optimization:**
\`\`\`javascript
// Bad - N+1 query problem
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findAll({ where: { userId: user.id } });
}

// Good - Use joins/includes
const users = await User.findAll({
  include: [{ model: Post }]
});
\`\`\`

### 3. Compression

Enable gzip/Brotli:
\`\`\`javascript
const compression = require('compression');
app.use(compression());
\`\`\`

### 4. CDN Usage

Serve static assets from CDN:
\`\`\`javascript
const CDN_URL = 'https://cdn.example.com';

function getAssetUrl(path) {
  return \`\${CDN_URL}\${path}\`;
}
\`\`\`

## React-Specific Optimizations

### 1. Memoization

**React.memo** - Prevent unnecessary re-renders:
\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive render */}</div>;
});
\`\`\`

**useMemo** - Cache expensive calculations:
\`\`\`javascript
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.value - b.value);
}, [items]);
\`\`\`

**useCallback** - Cache function references:
\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);
\`\`\`

### 2. Virtualization

For long lists, render only visible items:
\`\`\`javascript
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>{items[index].name}</div>
      )}
    </FixedSizeList>
  );
}
\`\`\`

## Performance Budget

Set limits and track them:

\`\`\`json
{
  "budget": [
    {
      "path": "/*",
      "timings": [
        { "metric": "interactive", "budget": 3000 },
        { "metric": "first-contentful-paint", "budget": 1500 }
      ],
      "resourceSizes": [
        { "resourceType": "script", "budget": 300 },
        { "resourceType": "image", "budget": 500 },
        { "resourceType": "total", "budget": 1000 }
      ]
    }
  ]
}
\`\`\`

## Monitoring

Track performance in production:

\`\`\`javascript
// Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

// Custom timing
performance.mark('api-start');
await fetchData();
performance.mark('api-end');
performance.measure('api-call', 'api-start', 'api-end');
\`\`\`

## Quick Wins Checklist

- ✅ Enable compression (gzip/Brotli)
- ✅ Optimize images (format, size, lazy load)
- ✅ Minify CSS/JS
- ✅ Enable browser caching
- ✅ Use a CDN
- ✅ Defer non-critical JavaScript
- ✅ Remove unused code
- ✅ Optimize fonts (subset, preload)
- ✅ Reduce redirects
- ✅ Use HTTP/2

## Conclusion

Performance optimization is an ongoing process. Measure regularly, set budgets, and prioritize user experience. Small improvements compound into significant gains!`,
  },
  {
    id: "10",
    title: "Testing React Applications",
    slug: "testing-react-applications",
    author: "Mike Thompson",
    authorImage:
      "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    date: "2024-01-25",
    readTime: "17 min read",
    tags: ["React", "Testing", "Jest", "Quality Assurance"],
    description:
      "Comprehensive guide to testing React applications with Jest and React Testing Library.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
    featured: false,
    markdown: `# Testing React Applications

Well-tested code prevents bugs, improves confidence when refactoring, and serves as living documentation.

## Testing Philosophy

**The Testing Trophy:**
1. **Static** (ESLint, TypeScript) - 🏆 Best ROI
2. **Unit** - Test individual functions
3. **Integration** - Test components working together
4. **E2E** - Test full user flows

Focus on **integration tests** - they provide the best balance of confidence and maintenance.

## Testing Library Setup

\`\`\`bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
\`\`\`

## Basic Component Test

\`\`\`javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
  
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    button.click();
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
\`\`\`

## Query Priority

Use queries in this order:

1. **getByRole** - Accessible to everyone
2. **getByLabelText** - Form inputs
3. **getByPlaceholderText** - If no label
4. **getByText** - Non-interactive elements
5. **getByTestId** - Last resort

\`\`\`javascript
// ✅ Good - Uses role
const button = screen.getByRole('button', { name: /submit/i });

// ✅ Good - Uses label
const input = screen.getByLabelText(/email/i);

// ❌ Avoid - Uses test ID
const element = screen.getByTestId('submit-button');
\`\`\`

## Testing User Interactions

Use **@testing-library/user-event** for realistic interactions:

\`\`\`javascript
import userEvent from '@testing-library/user-event';

test('typing in input field', async () => {
  const user = userEvent.setup();
  render(<SearchForm />);
  
  const input = screen.getByRole('textbox');
  await user.type(input, 'Hello World');
  
  expect(input).toHaveValue('Hello World');
});

test('selecting from dropdown', async () => {
  const user = userEvent.setup();
  render(<Select options={['Apple', 'Banana']} />);
  
  const select = screen.getByRole('combobox');
  await user.selectOptions(select, 'Banana');
  
  expect(select).toHaveValue('Banana');
});
\`\`\`

## Testing Async Code

\`\`\`javascript
test('loads and displays user data', async () => {
  // Mock API
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'John Doe' })
    })
  );
  
  render(<UserProfile userId={1} />);
  
  // Initially shows loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  // Wait for data to load
  const name = await screen.findByText(/john doe/i);
  expect(name).toBeInTheDocument();
  
  // Cleanup
  global.fetch.mockClear();
});
\`\`\`

## Mocking API Calls

### Using MSW (Mock Service Worker)

\`\`\`javascript
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        id: req.params.id,
        name: 'John Doe'
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches user data', async () => {
  render(<UserProfile userId="123" />);
  
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
});
\`\`\`

## Testing Hooks

\`\`\`javascript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('useCounter hook', () => {
  const { result } = renderHook(() => useCounter(0));
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
\`\`\`

## Testing Context

\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';

test('button uses theme from context', () => {
  render(
    <ThemeProvider value="dark">
      <ThemedButton>Click me</ThemedButton>
    </ThemeProvider>
  );
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('dark-theme');
});
\`\`\`

## Testing Forms

\`\`\`javascript
test('submits form with user data', async () => {
  const handleSubmit = jest.fn();
  const user = userEvent.setup();
  
  render(<SignupForm onSubmit={handleSubmit} />);
  
  await user.type(screen.getByLabelText(/name/i), 'John Doe');
  await user.type(screen.getByLabelText(/email/i), 'john@example.com');
  await user.type(screen.getByLabelText(/password/i), 'password123');
  
  await user.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  });
});

test('shows validation errors', async () => {
  const user = userEvent.setup();
  render(<SignupForm />);
  
  // Submit without filling form
  await user.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});
\`\`\`

## Snapshot Testing

Use sparingly - test behavior, not implementation:

\`\`\`javascript
test('matches snapshot', () => {
  const { container } = render(<Card title="Test" />);
  expect(container.firstChild).toMatchSnapshot();
});
\`\`\`

## Testing Router

\`\`\`javascript
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('navigates to user profile', async () => {
  const user = userEvent.setup();
  
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </MemoryRouter>
  );
  
  await user.click(screen.getByRole('link', { name: /view profile/i }));
  
  expect(screen.getByRole('heading', { name: /user profile/i }))
    .toBeInTheDocument();
});
\`\`\`

## Code Coverage

\`\`\`bash
# Run tests with coverage
npm test -- --coverage

# Coverage thresholds in package.json
{
  "jest": {
    "coverageThresholds": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
\`\`\`

## Best Practices

### 1. Test Behavior, Not Implementation

❌ Bad - Testing implementation:
\`\`\`javascript
test('counter state updates', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
});
\`\`\`

✅ Good - Testing behavior:
\`\`\`javascript
test('displays incremented count', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  await user.click(screen.getByRole('button', { name: /increment/i }));
  
  expect(screen.getByText('1')).toBeInTheDocument();
});
\`\`\`

### 2. Arrange-Act-Assert Pattern

\`\`\`javascript
test('user can login', async () => {
  // Arrange
  const user = userEvent.setup();
  render(<LoginForm />);
  
  // Act
  await user.type(screen.getByLabelText(/email/i), 'user@example.com');
  await user.type(screen.getByLabelText(/password/i), 'password');
  await user.click(screen.getByRole('button', { name: /login/i }));
  
  // Assert
  expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
});
\`\`\`

### 3. Keep Tests DRY

\`\`\`javascript
function renderWithRouter(component, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>
  );
}

test('renders home page', () => {
  renderWithRouter(<App />, { route: '/' });
  expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
});
\`\`\`

## Common Pitfalls

1. **Don't test implementation details**
2. **Don't use too many test IDs**
3. **Don't test third-party libraries**
4. **Don't write tests that can pass with broken code**
5. **Don't ignore accessibility**

## Conclusion

Good tests give confidence, catch bugs early, and document behavior. Focus on integration tests, test user behavior, and keep tests maintainable!`,
  },
];

// Helper function to get article by slug
export function getArticleBySlug(slug) {
  return mockArticles.find((article) => article.slug === slug);
}

// Helper function to get articles by tag
export function getArticlesByTag(tag) {
  return mockArticles.filter((article) =>
    article.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

// Helper function to get featured articles
export function getFeaturedArticles() {
  return mockArticles.filter((article) => article.featured);
}

// Helper function to get related articles based on tags
export function getRelatedArticles(currentArticle, limit = 4) {
  return mockArticles
    .filter((article) => article.id !== currentArticle.id)
    .filter((article) =>
      article.tags.some((tag) => currentArticle.tags.includes(tag)),
    )
    .slice(0, limit);
}
