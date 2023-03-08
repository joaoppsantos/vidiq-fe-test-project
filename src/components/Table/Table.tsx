import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getTrendingKeywords } from '../../utils/getTrendingKeywords';
import { getKeywords } from '../../utils/getKeywords';
import { Keyword } from '../../utils/types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableContent } from '../TableContent/TableContent';

export const Table = () => {
  const [trendingKeywords, setTrendingKeywords] = useState<number[]>([]);
  const [keywords, setKeywords] = useState<Keyword[]>([]);

  useEffect(() => {
    const fetchTrendingKeywords = async () => {
      const trendingKeywordsResponse = await getTrendingKeywords();
      console.log(trendingKeywordsResponse, 'result trending');
      setTrendingKeywords(trendingKeywordsResponse.data);
    };
    const fetchKeywords = async () => {
      const keywordsResponse = await getKeywords({
        page: 1,
      });
      console.log(keywordsResponse, 'result keywords');
      setKeywords(keywordsResponse.data);
    };
    fetchTrendingKeywords();
    fetchKeywords();
  }, []);

  return (
    <Box h="full" role="table">
      <TableHeader />
      <TableContent keywords={keywords} trendingKeywords={trendingKeywords} />
    </Box>
  );
};
