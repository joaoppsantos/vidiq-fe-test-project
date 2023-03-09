import {
  ColumnContentType,
  Keyword,
  TableColumns,
  TableContentProps,
} from '../../utils/types';
import { TableElement } from '../TableElement/TableElement';
import { Box, Divider, Flex } from '@chakra-ui/react';
import { TrendingKeyword } from '../TrendingKeyword/TrendingKeyword';
import { addNumberSeparator } from '../../utils/addNumberSeparator';
import { OverallScore } from '../OverallScore/OverallScore';
import { PAGE_FOOTER_HEIGHT } from '../../utils/constants';

const columnContent: ColumnContentType = {
  [TableColumns.search_volume]: (keyword: Keyword) => (
    <TableElement children={addNumberSeparator(keyword.search_volume)} />
  ),
  [TableColumns.competition]: (keyword: Keyword) => (
    <TableElement children={keyword.competition} />
  ),
  [TableColumns.overall_score]: (keyword: Keyword) => (
    <TableElement children={<OverallScore score={keyword.overall_score} />} />
  ),
};

export const TableContent = ({
  trendingKeywords,
  keywords,
}: TableContentProps): JSX.Element => (
  <Box overflowY="auto" h={`calc(100vh - ${PAGE_FOOTER_HEIGHT})`}>
    {keywords.map((keyword) => (
      <Box key={keyword.id} ml="3" mr="2" mt="2" mb="2">
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
