# 🚀 Space News API App

A responsive JavaScript web application that fetches and displays the latest space-related news articles using the **Spaceflight News API**.  
The project dynamically creates all news cards and overlay components directly through JavaScript DOM manipulation without relying on pre-written HTML structures.

---

## 📌 Project Overview

This application loads news articles from the Spaceflight News API and presents them in a modern card-based layout. Users can scroll infinitely to load more news articles automatically and click on any card to view additional details inside a modal overlay.

The project focuses heavily on:

- Dynamic DOM manipulation
- Infinite scrolling
- Asynchronous API handling
- Event delegation
- Responsive UI design
- Overlay/modal interaction
- Error handling and loading states

---

## 🌐 Live Demo

```md
Live Project: https://your-live-link.com
```

---

# ✨ Features

- ✅ Fetches live news data from the Spaceflight News API
- ✅ Dynamic creation of DOM elements using JavaScript
- ✅ Infinite scrolling with Intersection Observer API
- ✅ Responsive card layout using Flexbox
- ✅ Clickable article cards with overlay modal
- ✅ Loading spinner while fetching data
- ✅ Error message handling for failed API requests
- ✅ Smooth hover animations and transitions
- ✅ Clean and minimal UI design

---

# 🛠️ Technologies Used

| Technology                | Purpose                       |
| ------------------------- | ----------------------------- |
| HTML5                     | Base structure                |
| CSS3                      | Styling and responsive design |
| JavaScript (ES6+)         | Application logic             |
| Fetch API                 | API requests                  |
| Intersection Observer API | Infinite scrolling            |
| Spaceflight News API      | External news data source     |

---

# 🧠 Core Concepts Implemented

## 1. Dynamic DOM Manipulation

Instead of writing cards directly in HTML, the entire UI structure is generated dynamically using:

```js
document.createElement();
Object.assign();
appendChild();
```

This makes the application more scalable and modular.

---

## 2. Infinite Scrolling

The application automatically loads more articles when the user reaches the bottom of the page using:

```js
IntersectionObserver;
```

A hidden sentinel element (`#moreElement`) is observed to trigger additional API requests.

---

## 3. Event Delegation

Rather than attaching event listeners to every card individually, a single event listener is attached to:

```js
document.body;
```

This improves performance and supports dynamically created elements.

---

## 4. Async/Await API Handling

News data is fetched asynchronously using:

```js
fetch()
async/await
try/catch
```

This ensures clean asynchronous operations and proper error handling.

---

# 📂 Project Structure

```bash
project-folder/
│
├── index.html
├── style.css
└── app.js
```

---

# 📄 Application Workflow

## 🔹 Initial Load

When the application starts:

1. Loader spinner appears
2. API request is sent
3. First 10 news articles are fetched
4. Cards are dynamically rendered
5. Loader disappears

---

## 🔹 Infinite Scroll Process

1. User scrolls down
2. Intersection Observer detects bottom element
3. `loadData()` executes again
4. Next batch of articles is loaded

---

## 🔹 Overlay Modal

When a card is clicked:

- Article title
- Image
- Summary

are displayed inside a modal overlay dynamically.

Clicking outside the card closes the overlay.

---

# 🔄 Dynamic DOM Elements

This project dynamically creates several UI components entirely through JavaScript:

| Element                  | Purpose                       |
| ------------------------ | ----------------------------- |
| News Cards               | Display article previews      |
| Overlay Modal            | Show detailed article content |
| Loader Spinner           | Indicate loading state        |
| Error Message            | Display API/network errors    |
| Infinite Scroll Sentinel | Trigger lazy loading          |

---

# 📡 API Used

### Spaceflight News API

```bash
https://api.spaceflightnewsapi.net/v4/articles/
```

Used to retrieve:

- Article title
- Article image
- Author name
- Article summary

---

# 🎨 UI Highlights

- Sticky navigation bar
- Card hover animations
- Glassmorphism-style overlay background
- Responsive flex layout
- Smooth transitions and shadows

---

# ⚠️ Error Handling

The application handles failed API responses gracefully.

If the request fails:

- Loader is removed
- Error container is displayed
- User receives visual feedback

---

# 📱 Responsive Design

The layout adapts to different screen sizes using:

- Flexbox
- Flexible widths
- Responsive image handling

---

# 📚 Learning Outcomes

Through this project, the following concepts were practiced:

- DOM traversal and manipulation
- Dynamic element generation
- API integration
- Infinite scrolling implementation
- Event bubbling and delegation
- Responsive CSS layouts
- Async JavaScript patterns
