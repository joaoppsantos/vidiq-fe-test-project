import { render, fireEvent } from '@testing-library/react';
import { Pagination } from '../Pagination';

const mockHandlePagination = jest.fn();

describe('Pagination', () => {
  const mockPaginationProps = {
    pageLimit: 20,
    count: 50,
    onHandlePagination: mockHandlePagination,
    currentPage: 1,
  };

  it('renders page buttons with correct text', () => {
    const { getByText } = render(<Pagination {...mockPaginationProps} />);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });

  it('renders correct parameters and on page click changes current page to 2', () => {
    const { getByText } = render(<Pagination {...mockPaginationProps} />);

    expect(getByText('1')).toHaveAttribute('aria-label', 'Page 1');
    expect(getByText('1')).toHaveClass('chakra-button');
    expect(getByText('2')).toHaveAttribute('aria-label', 'Page 2');
    expect(getByText('2')).toHaveClass('chakra-button');

    fireEvent.click(getByText('2'));

    expect(mockHandlePagination).toHaveBeenCalledWith(2);
  });
});
