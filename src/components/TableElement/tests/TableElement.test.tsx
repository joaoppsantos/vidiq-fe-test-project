import { render } from '@testing-library/react';
import { TableElement } from '../TableElement';

describe('TableElement', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TableElement>Test</TableElement>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('renders correctly when rendering an header element', () => {
    const { getByText } = render(<TableElement isHeader>Header</TableElement>);
    const element = getByText('Header');

    expect(element).toHaveStyle({
      color: 'blackAlpha.700',
      flex: '1',
    });
  });

  it('renders correctly when rendering main column element', () => {
    const { getByText } = render(
      <TableElement isMainColumn>Main Column</TableElement>
    );
    const element = getByText('Main Column');

    expect(element).toHaveStyle({
      color: 'blackAlpha.900',
      flex: '3',
    });
  });

  it('renders correctly when rendering body element', () => {
    const { getByText } = render(<TableElement>Body</TableElement>);
    const element = getByText('Body');

    expect(element).toHaveStyle({
      color: 'blackAlpha.900',
      flex: '1',
    });
  });
});
