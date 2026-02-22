import { mockPage1 } from '../data/mockData';

/**
 * Utility to fetch page data. In the future, this will fetch from JSON files.
 */
export const fetchPageData = async (pageNumber) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // For now, return mock data for page 1, or empty for others
    if (pageNumber === 1 || pageNumber === 58) {
        return {
            ...mockPage1,
            pageNumber
        };
    }

    return null;
};
