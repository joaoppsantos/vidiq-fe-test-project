import { render } from '@testing-library/react';
import { TableContent } from '../TableContent';

const mockKeywords = [
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
const mockTrendingKeywords = [1];

const mockMatchMedia = (match = false) =>
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

describe('TableContent', () => {
  it('renders all the columns when in desktop', () => {
    mockMatchMedia(false);

    const { getByText } = render(
      <TableContent
        keywords={mockKeywords}
        trendingKeywords={mockTrendingKeywords}
        selectedColumn={'Search volume'}
      />
    );

    expect(getByText('test keyword 1 🔥')).toBeInTheDocument();
    expect(getByText('1,000')).toBeInTheDocument();
    expect(getByText('high')).toBeInTheDocument();
    expect(getByText('75')).toBeInTheDocument();

    expect(getByText('test keyword 2')).toBeInTheDocument();
    expect(getByText('2,000')).toBeInTheDocument();
    expect(getByText('low')).toBeInTheDocument();
    expect(getByText('30')).toBeInTheDocument();
  });

  it('renders keyword and selected column when in mobile', () => {
    mockMatchMedia(true);

    const { getByText } = render(
      <TableContent
        keywords={mockKeywords}
        trendingKeywords={mockTrendingKeywords}
        selectedColumn={'Competition'}
      />
    );

    expect(getByText('test keyword 1 🔥')).toBeInTheDocument();
    expect(getByText('high')).toBeInTheDocument();

    expect(getByText('test keyword 2')).toBeInTheDocument();
    expect(getByText('low')).toBeInTheDocument();
  });
});
