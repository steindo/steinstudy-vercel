// Use Vite's glob import to get all page JSON files
const pages = import.meta.glob('../data/pages/*.json');

/**
 * Utility to fetch page data dynamically.
 */
export const fetchPageData = async (pageNumber) => {
    const path = `../data/pages/page_${pageNumber}.json`;

    if (pages[path]) {
        const mod = await pages[path]();
        return mod.default;
    }

    console.warn(`Data for page ${pageNumber} not found.`);
    return null;
};
