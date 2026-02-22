# Product Design Document (PRD) - SteinStudy

## 1. Project Overview
**SteinStudy** is an interactive ed-tech web application designed to digitize a 304-page exercise book. The application overlays interactive elements (inputs, checkboxes) directly onto high-resolution scans of the book pages, providing a seamless transition from physical to digital learning.

## 2. Technical Stack
- **Frontend Framework:** React (Vite-based for performance)
- **Styling:** TailwindCSS (Utility-first CSS for rapid, responsive design)
- **State Management:** React Context API or Zustand (for lightweight progress tracking)
- **Storage:** LocalStorage (for client-side persistence of user answers and progress)
- **Architecture:** Modular component-based architecture with strict separation between UI logic and page data.

## 3. Core Mechanics & Architecture
### 3.1. Background Rendering
- Each page is displayed as a high-resolution image background.
- Images are sourced from the `/scans` directory.

### 3.2. Interactivity Layer (Overlay)
- **Relative Positioning:** All interactive components (`<input>`, `<checkbox>`) are positioned using absolute coordinates expressed in percentages (`%`).
- **Responsiveness:** This ensure that pins and input fields remain perfectly aligned with the text lines in the background image regardless of screen size or zoom level.

### 3.3. Data Separation
- **Page Configuration:** Every page has a corresponding JSON file (e.g., `page_1.json`, `page_2.json`) located in a dedicated `/data` or `/configs` folder.
- **JSON Schema:**
  ```json
  {
    "pageNumber": 1,
    "imagePath": "/scans/page_1.jpg",
    "elements": [
      {
        "id": "q1",
        "type": "text",
        "top": "45.2%",
        "left": "12.5%",
        "width": "30%",
        "answer": "example"
      }
    ]
  }
  ```

## 4. Performance & Scalability
- **Lazy Loading:** Given the scale (304 pages), a robust lazy loading system is implemented. Only the current, previous, and next pages are loaded into memory to ensure zero latency.
- **Image Optimization:** Scans are delivered in WebP format or optimized JPEGs to minimize bandwidth.

## 5. Learning Features
- **Correction Engine:** A "Verify" button on each page triggers a validation algorithm.
- **AI Integration:** Suggested corrections are provided for open-ended text fields.
- **Progress Tracking:**
    - Global progress bar visible in the sidebar.
    - Automatic save of state to `localStorage` per page.

## 6. UX/UI Design
- **Theme:** Minimalist "Productivity" mode (Light Mode).
- **Tooling:** Discreet inputs that illuminate (Blue Border) when active.
- **Navigation:** Hierarchical sidebar for Chapters/Exercises and a "Jump to Page" function.
