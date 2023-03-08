import { TrendingKeywordProps } from '../../utils/types';
import { TableElement } from '../TableElement/TableElement';

export const TrendingKeyword = ({
  id,
  content,
  trendingKeywords,
}: TrendingKeywordProps): JSX.Element => {
  const getTrending = (): string =>
    trendingKeywords.includes(id) ? `${content} 🔥` : `${content}`;

  return <TableElement children={getTrending()} isMainColumn />;
};
