import { render, fireEvent } from '@testing-library/react';
import { ColumnSort } from '../ColumnSort';

jest.mock('@chakra-ui/icons', () => ({
  ChevronUpIcon: () => <div>ChevronUp Icon</div>,
  ChevronDownIcon: () => <div>ChevronDown Icon</div>,
}));

jest.mock('../../../utils/types', () => ({
  TableColumns: {
    competition: 'competition',
    keyword: 'keyword',
    overall_score: 'overall_score',
    search_volume: 'search_volume',
  },
}));

describe('ColumnSort', () => {
  const mockSortByColumn = jest.fn();

  it('renders the text correctly', () => {
    const { getByText } = render(
      <ColumnSort text="competition" sortByColumn={mockSortByColumn} />
    );

    expect(getByText('competition')).toBeInTheDocument();
  });

  it('renders the up arrow icon', () => {
    const { getByLabelText } = render(
      <ColumnSort text="competition" sortByColumn={mockSortByColumn} />
    );

    const upArrow = getByLabelText('Sort Ascending');

    expect(upArrow).toBeInTheDocument();
  });

  it('renders the down arrow icon', () => {
    const { getByLabelText } = render(
      <ColumnSort text="competition" sortByColumn={mockSortByColumn} />
    );

    const downArrow = getByLabelText('Sort Descending');

    expect(downArrow).toBeInTheDocument();
  });

  it('sorts by competition in ascending order when the up arrow is clicked', () => {
    const { getByLabelText } = render(
      <ColumnSort text="competition" sortByColumn={mockSortByColumn} />
    );

    const upArrow = getByLabelText('Sort Ascending');
    fireEvent.click(upArrow);

    expect(mockSortByColumn).toHaveBeenCalledWith('competition', 'asc');
  });

  it('sorts by competition in descending order when the down arrow is clicked', () => {
    const { getByLabelText } = render(
      <ColumnSort text="competition" sortByColumn={mockSortByColumn} />
    );

    const downArrow = getByLabelText('Sort Descending');
    fireEvent.click(downArrow);

    expect(mockSortByColumn).toHaveBeenCalledWith('competition', 'desc');
  });
});
