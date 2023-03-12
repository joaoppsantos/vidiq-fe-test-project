import { render } from '@testing-library/react';
import { mockMatchMedia } from '../../../utils/testMocks';
import { TableHeader } from '../TableHeader';

jest.mock('../../../utils/types', () => ({
  TableColumns: {
    competition: 'competition',
    keyword: 'keyword',
    overall_score: 'overall score',
    search_volume: 'search volume',
  },
}));

describe('TableHeader', () => {
  const mockSortByColumn = jest.fn();

  it('renders keyword and selected column with correct sort icons and respective aria-label when in mobile', () => {
    mockMatchMedia(true);

    const { getAllByRole, queryByText } = render(
      <TableHeader
        sortByColumn={mockSortByColumn}
        selectedColumn={'search volume'}
      />
    );

    expect(queryByText('keyword')).toBeInTheDocument();
    expect(queryByText('search volume')).toBeInTheDocument();
    expect(queryByText('overall score')).not.toBeInTheDocument();
    expect(queryByText('competition')).not.toBeInTheDocument();

    const sortIcons = getAllByRole('button');
    expect(sortIcons[0]).toHaveAttribute('aria-label', 'Sort Ascending');
    expect(sortIcons[1]).toHaveAttribute('aria-label', 'Sort Descending');
  });

  it('renders all the columns when in desktop', () => {
    mockMatchMedia(false);

    const { queryByText } = render(
      <TableHeader
        sortByColumn={mockSortByColumn}
        selectedColumn={'search volume'}
      />
    );

    expect(queryByText('keyword')).toBeInTheDocument();
    expect(queryByText('search volume')).toBeInTheDocument();
    expect(queryByText('overall score')).toBeInTheDocument();
    expect(queryByText('competition')).toBeInTheDocument();
  });
});
