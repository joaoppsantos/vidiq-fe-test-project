export const mockKeywords = [
  {
    id: 1,
    keyword: 'test keyword 1',
    search_volume: 1000,
    competition: 'high',
    overall_score: 75,
  },
  {
    id: 2,
    keyword: 'test keyword 2',
    search_volume: 2000,
    competition: 'low',
    overall_score: 30,
  },
];
export const mockTrendingKeywords = [1];
export const mockMatchMedia = (match = false) =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      return {
        matches: match,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    }),
  });
