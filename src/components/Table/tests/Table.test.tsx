import { render } from '@testing-library/react';
import {
  mockKeywords,
  mockMatchMedia,
  mockTrendingKeywords,
} from '../../../utils/testMocks';
import { Table } from '../Table';

jest.mock('../../../utils/getKeywords');
jest.mock('../../../utils/getTrendingKeywords');

describe('Table', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the keywords table when in mobile', async () => {
    mockMatchMedia(true);

    const { getKeywords } = require('../../../utils/getKeywords');
    getKeywords.mockResolvedValueOnce({
      data: mockKeywords,
    });

    const {
      getTrendingKeywords,
    } = require('../../../utils/getTrendingKeywords');
    getTrendingKeywords.mockResolvedValueOnce({
      data: mockTrendingKeywords,
    });

    const { findByRole, queryByText } = render(
      <Table selectedColumn="Search volume" />
    );

    expect(await findByRole('table')).toBeInTheDocument();
    expect(queryByText('Keywords')).toBeInTheDocument();
  });
  it('should render the keywords table when in desktop', async () => {
    mockMatchMedia(false);

    const { getKeywords } = require('../../../utils/getKeywords');
    getKeywords.mockResolvedValueOnce({
      data: mockKeywords,
    });

    const {
      getTrendingKeywords,
    } = require('../../../utils/getTrendingKeywords');
    getTrendingKeywords.mockResolvedValueOnce({
      data: mockTrendingKeywords,
    });

    const { findByRole, queryByText } = render(
      <Table selectedColumn="Search volume" />
    );

    expect(await findByRole('table')).toBeInTheDocument();
    expect(queryByText('Keywords')).toBeInTheDocument();
  });
});
