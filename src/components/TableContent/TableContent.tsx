import {
  ColumnContentType,
  Keyword,
  TableColumns,
  TableContentProps,
} from '../../utils/types';
import { TableElement } from '../TableElement/TableElement';
import { Box, Divider, Flex } from '@chakra-ui/react';
import { TrendingKeyword } from '../TrendingKeyword/TrendingKeyword';

const columnContent: ColumnContentType = {
  [TableColumns.competition]: (keyword: Keyword) => (
    <TableElement children={keyword.competition} />
  ),
  [TableColumns.search_volume]: (keyword: Keyword) => (
    <TableElement children={keyword.search_volume} />
  ),
  [TableColumns.overall_score]: (keyword: Keyword) => (
    <TableElement children={keyword.overall_score} />
  ),
};

export const TableContent = ({
  trendingKeywords,
  keywords,
}: TableContentProps): JSX.Element => {
  console.log(keywords, 'keywords');
  return (
    <Box w="full" scrollBehavior="smooth">
      {keywords.map((keyword) => (
        <Box key={keyword.id}>
          <Flex flexDirection="row">
            <TrendingKeyword
              content={keyword.keyword}
              id={keyword.id}
              trendingKeywords={trendingKeywords}
            />
            {columnContent[TableColumns.search_volume](keyword)}
            {columnContent[TableColumns.competition](keyword)}
            {columnContent[TableColumns.overall_score](keyword)}
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
