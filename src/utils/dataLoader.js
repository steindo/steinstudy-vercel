// Use Vite's glob import to get all page JSON files in the config folder
const pageConfigs = import.meta.glob('../data/config/*.json');

/**
 * Utility to fetch page data dynamically.
 */
export const fetchPageData = async (pageNumber) => {
    const path = `../data/config/page_${pageNumber}.json`;

    if (pageConfigs[path]) {
        const mod = await pageConfigs[path]();
        return mod.default;
    }

    console.warn(`Data for page ${pageNumber} not found at ${path}`);
    return null;
};
