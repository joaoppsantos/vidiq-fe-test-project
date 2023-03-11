import { fireEvent, getByText, render } from '@testing-library/react';
import { SelectColumnMobile } from '../SelectColumnMobile';

jest.mock('../../../utils/types', () => ({
  TableColumns: {
    competition: 'competition',
    overall_score: 'overall_score',
    search_volume: 'search_volume',
  },
}));

describe('SelectColumnMobile', () => {
  const mockOnHandleChange = jest.fn();

  it('renders all expected header values correctly in select element', () => {
    const { getByRole } = render(
      <SelectColumnMobile
        selectedColumn="search_volume"
        onHandleChange={mockOnHandleChange}
      />
    );

    const selectElement = getByRole('combobox');

    expect(selectElement).toBeInTheDocument();
    expect(getByText(selectElement, 'competition')).toBeInTheDocument();
    expect(getByText(selectElement, 'overall_score')).toBeInTheDocument();
    expect(getByText(selectElement, 'search_volume')).toBeInTheDocument();
  });

  it('renders the select element with the selected column value', () => {
    const { getByRole } = render(
      <SelectColumnMobile
        selectedColumn="overall_score"
        onHandleChange={mockOnHandleChange}
      />
    );

    const selectElement = getByRole('combobox') as HTMLSelectElement;

    expect(selectElement.value).toBe('overall_score');
  });

  it('calls onHandleChange callback on option click', () => {
    const { getByRole } = render(
      <SelectColumnMobile
        selectedColumn="competition"
        onHandleChange={mockOnHandleChange}
      />
    );

    const selectElement = getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: 'search_volume' } });

    expect(mockOnHandleChange).toHaveBeenCalled();
  });
});
