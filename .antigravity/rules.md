# SteinStudy Global Rules & Standards

These rules are absolute and must be followed by any agent or developer working on the SteinStudy project.

## 1. Respect for Source Material
- **Rule:** Never modify, rename, or delete the original source files in the `/scans` directory. These are the read-only assets of the project.

## 2. Component Design Standards
- **Rule:** All interactive overlay components (Inputs, Checkboxes, etc.) must adhere to the following visual states:
    - **Rest State:** Transparent background, no borders.
    - **Focus State:** 2px Blue border (`border-blue-500` in Tailwind), slight background highlight.

## 3. Mandatory Page Features
- **Rule:** Every page component integration must include a **'Vérifier' (Verify)** button.
- **Rule:** This button must be linked to a correction algorithm that compares user input against the metadata stored in the page's JSON configuration.

## 4. Data Integrity & Persistence
- **Rule:** User progression (answers, status of completion) must be systematically saved to `localStorage` or a database.
- **Rule:** Implementation must include a "Auto-Save" trigger on input change or "Verify" click to prevent any data loss.

## 5. Architectural Integrity
- **Rule:** Any new page must have its interactive coordinates defined in a separate JSON file. No hardcoded coordinates in React components.
