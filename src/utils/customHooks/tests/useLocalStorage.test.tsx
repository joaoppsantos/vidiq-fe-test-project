import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useLocalStorage } from '../useLocalStorage';

const UseLocalStorageMock = (): JSX.Element => {
  const [value, setValue] = useLocalStorage(
    'keywords-table-initial-state',
    'local storage props'
  );
  return (
    <div>
      <div data-testid="local-storage-testid">{value}</div>
      <input
        type="text"
        data-testid="local-storage-input-testid"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

describe('useLocalStorage', () => {
  it('renders mock component with default props', () => {
    const { getByTestId } = render(<UseLocalStorageMock />);

    expect(getByTestId('local-storage-testid')).toHaveTextContent(
      'local storage props'
    );
  });

  it('renders mock component with the localStorage value', () => {
    render(<UseLocalStorageMock />);

    expect(
      JSON.parse(localStorage.getItem('keywords-table-initial-state') as string)
    ).toBe('local storage props');
  });

  it('updates to the new localStorage value', () => {
    const { getByTestId } = render(<UseLocalStorageMock />);
    const input = getByTestId('local-storage-input-testid');

    userEvent.clear(input);
    userEvent.type(input, 'item in local storage');

    expect(getByTestId('local-storage-testid')).toHaveTextContent(
      'item in local storage'
    );
    expect(
      JSON.parse(localStorage.getItem('keywords-table-initial-state') as string)
    ).toBe('item in local storage');
  });

  it('returns the default value when localStorage is empty', () => {
    const { getByTestId } = render(<UseLocalStorageMock />);
    const input = getByTestId('local-storage-input-testid');

    userEvent.clear(input);
    userEvent.type(input, 'item in local storage');

    localStorage.removeItem('keywords-table-initial-state');
    expect(
      JSON.parse(localStorage.getItem('keywords-table-initial-state') as string)
    ).not.toBe('item in local storage');
  });
});
