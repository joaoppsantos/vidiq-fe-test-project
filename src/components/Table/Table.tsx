import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getTrendingKeywords } from '../../utils/getTrendingKeywords';
import { getKeywords } from '../../utils/getKeywords';
import { Keyword } from '../../utils/types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableContent } from '../TableContent/TableContent';
import { Pagination } from '../Pagination/Pagination';
import { useLocalStorage } from '../../utils/customHooks/useLocalStorage';
import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_SORT_CATEGORY,
  DEFAULT_SORT_ORDER,
} from '../../utils/constants';

export const Table = () => {
  const [persistedOptions, setPersistedOptions] = useLocalStorage(
    'keywords-table-initial-state',
    {
      currentPage: 1,
      sortCategory: DEFAULT_SORT_CATEGORY,
      order: DEFAULT_SORT_ORDER,
    }
  );
  const [trendingKeywords, setTrendingKeywords] = useState<number[]>([]);
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(persistedOptions?.currentPage);
  const [order, setOrder] = useState(persistedOptions?.order);
  const [sortCategory, setSortCategory] = useState(
    persistedOptions.sortCategory
  );

  const fetchKeywords = async () => {
    try {
      const result = await getKeywords({
        page: currentPage,
        sort: sortCategory,
        order,
      });
      setKeywords(result.data);
      setTotalCount(Number(result.total_count));
    } catch (error) {
      console.log(error);
    }
  };
  const handlePagination = (currentPage: number) => {
    setCurrentPage(currentPage);
    setPersistedOptions({ ...persistedOptions, currentPage: currentPage });
  };
  const fetchTrendingKeywords = async () => {
    const trendingKeywordsResponse = await getTrendingKeywords();
    setTrendingKeywords(trendingKeywordsResponse.data);
  };
  const sortByColumn = (sortCategory: string, order: string) => {
    setSortCategory(sortCategory);
    setOrder(order);
    setPersistedOptions({ ...persistedOptions, order, sortCategory });
  };

  useEffect(() => {
    fetchTrendingKeywords();
    fetchKeywords();
  }, []);
  useEffect(() => {
    fetchKeywords();
  }, [currentPage, sortCategory, order]);

  return (
    <Box h="full" overflow="hidden" role="table">
      <TableHeader sortByColumn={sortByColumn} />
      <TableContent keywords={keywords} trendingKeywords={trendingKeywords} />
      <Pagination
        pageLimit={DEFAULT_PAGE_LIMIT}
        count={totalCount}
        onHandlePagination={handlePagination}
        currentPage={currentPage}
      />
    </Box>
  );
};
