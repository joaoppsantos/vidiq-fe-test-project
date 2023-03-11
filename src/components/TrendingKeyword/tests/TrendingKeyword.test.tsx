import { render } from '@testing-library/react';
import { TrendingKeyword } from '../TrendingKeyword';

describe('TrendingKeyword', () => {
  it('renders non trending keyword correctly', () => {
    const { getByText } = render(
      <TrendingKeyword id={1} content="Cardify" trendingKeywords={[]} />
    );
    expect(getByText('Cardify')).toBeInTheDocument();
  });

  it('renders trending keyword correctly', () => {
    const { getByText } = render(
      <TrendingKeyword id={1} content="Cardify" trendingKeywords={[1]} />
    );
    expect(getByText('Cardify 🔥')).toBeInTheDocument();
  });
});
