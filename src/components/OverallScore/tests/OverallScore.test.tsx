import { render } from '@testing-library/react';
import { OverallScore } from '../OverallScore';

jest.mock('../../../utils/constants', () => ({
  VERY_LOW_SCORE_COLOR: 'red',
  LOW_SCORE_COLOR: 'orange',
  MEDIUM_SCORE_COLOR: 'yellow',
  HIGH_SCORE_COLOR: 'light green',
  VERY_HIGH_SCORE_COLOR: 'green',
}));

describe('OverallScore', () => {
  it('renders the score correctly', () => {
    const { getByText } = render(<OverallScore score={50} />);

    expect(getByText('50')).toBeInTheDocument();
  });

  it('renders the correct background color based on the score', () => {
    const { getByText } = render(<OverallScore score={30} />);

    expect(getByText('30')).toHaveStyle('background-color: orange');
  });
});
