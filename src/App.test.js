import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

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

describe('App', () => {
  it('renders title and table when on desktop', () => {
    mockMatchMedia(false);

    const { queryByText, queryByRole } = render(<App />);

    expect(queryByText('List of Keywords')).toBeInTheDocument();
    expect(queryByRole('table')).toBeInTheDocument();
    expect(queryByRole('combobox')).not.toBeInTheDocument();
  });

  it('renders title, table and select component when on mobile', () => {
    mockMatchMedia(true);

    const { queryByText, queryByRole } = render(<App />);

    expect(queryByText('List of Keywords')).toBeInTheDocument();
    expect(queryByRole('table')).toBeInTheDocument();
    expect(queryByRole('combobox')).toBeInTheDocument();
  });
});
