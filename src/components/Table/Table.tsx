import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getTrendingKeywords } from '../../utils/getTrendingKeywords';
import { getKeywords } from '../../utils/getKeywords';
import { Keyword, TableColumns, TableProps } from '../../utils/types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableContent } from '../TableContent/TableContent';
import { Pagination } from '../Pagination/Pagination';
import { useLocalStorage } from '../../utils/customHooks/useLocalStorage';
import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_SORT_CATEGORY,
  DEFAULT_SORT_ORDER,
} from '../../utils/constants';

export const Table = ({
  selectedColumn = TableColumns.search_volume,
}: TableProps) => {
  const [persistedOptions, setPersistedOptions] = useLocalStorage(
    'keywords-table-initial-state',
    {
      currentPage: 1,
      sortCategory: DEFAULT_SORT_CATEGORY,
      order: DEFAULT_SORT_ORDER,
    }
  );
  const [componentMounted, setComponentMounted] = useState(false);
  const [trendingKeywords, setTrendingKeywords] = useState<number[]>([]);
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(persistedOptions?.currentPage);
  const [order, setOrder] = useState(persistedOptions?.order);
  const [sortCategory, setSortCategory] = useState(
    persistedOptions.sortCategory
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchKeywords = async () => {
    try {
      const result = await getKeywords({
        page: currentPage,
        sort: sortCategory,
        order,
      });
      setKeywords(result.data);
      setTotalCount(Number(result.total_count));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTrendingKeywords = async () => {
    const trendingKeywordsResponse = await getTrendingKeywords();
    setTrendingKeywords(trendingKeywordsResponse.data);
  };

  const handlePagination = (currentPage: number) => {
    setCurrentPage(currentPage);
    setPersistedOptions({ ...persistedOptions, currentPage: currentPage });
  };
  const sortByColumn = (sortCategory: string, order: string) => {
    setSortCategory(sortCategory);
    setOrder(order);
    setPersistedOptions({ ...persistedOptions, order, sortCategory });
  };

  useEffect(() => {
    fetchTrendingKeywords();
    setComponentMounted(true);
  }, []);
  useEffect(() => {
    componentMounted && fetchKeywords();
  }, [currentPage, sortCategory, order, componentMounted]);

  return (
    <Box h="full" overflow="hidden" role="table">
      <TableHeader
        sortByColumn={sortByColumn}
        selectedColumn={selectedColumn}
      />
      {isLoading ? (
        <Flex mt="10" justifyContent="center">
          <div>Loading...</div>
        </Flex>
      ) : (
        <TableContent
          keywords={keywords}
          trendingKeywords={trendingKeywords}
          selectedColumn={selectedColumn}
        />
      )}
      <Pagination
        pageLimit={DEFAULT_PAGE_LIMIT}
        count={totalCount}
        onHandlePagination={handlePagination}
        currentPage={currentPage}
      />
    </Box>
  );
};
