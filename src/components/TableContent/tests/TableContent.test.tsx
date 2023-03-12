import { render } from '@testing-library/react';
import {
  mockKeywords,
  mockMatchMedia,
  mockTrendingKeywords,
} from '../../../utils/testMocks';
import { TableContent } from '../TableContent';

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
