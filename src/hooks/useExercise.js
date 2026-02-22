import { useState, useCallback } from 'react';

/**
 * Hook to manage user progress and persistence.
 */
export const useProgress = (pageNumber) => {
    const storageKey = `stein_page_${pageNumber}`;

    const [answers, setAnswers] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : {};
    });

    const saveAnswers = useCallback((newAnswers) => {
        setAnswers(newAnswers);
        localStorage.setItem(storageKey, JSON.stringify(newAnswers));
    }, [storageKey]);

    const updateAnswer = (elementId, value) => {
        saveAnswers({
            ...answers,
            [elementId]: value,
            [`${elementId}_status`]: null
        });
    };

    const getStatus = (elementId) => answers[`${elementId}_status`];

    return {
        answers,
        updateAnswer,
        saveAnswers,
        getStatus
    };
};

/**
 * Flexible correction engine.
 * Handles case insensitivity, whitespace trimming, and potential multiple answers.
 */
export const validateAnswer = (userInput, expectedAnswer) => {
    if (!userInput) return null;

    const cleanInput = userInput.trim().toLowerCase();

    // Support for multiple valid answers separated by '|'
    const validAnswers = expectedAnswer.toLowerCase().split('|').map(a => a.trim());

    return validAnswers.includes(cleanInput) ? 'correct' : 'incorrect';
};
