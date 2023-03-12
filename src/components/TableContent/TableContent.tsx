import {
  ColumnContentType,
  Keyword,
  TableColumns,
  TableContentProps,
} from '../../utils/types';
import { TableElement } from '../TableElement/TableElement';
import { Box, Divider, Flex, useMediaQuery } from '@chakra-ui/react';
import { TrendingKeyword } from '../TrendingKeyword/TrendingKeyword';
import { addNumberSeparator } from '../../utils/addNumberSeparator';
import { OverallScore } from '../OverallScore/OverallScore';
import { MOBILE_WIDTH, PAGE_FOOTER_HEIGHT } from '../../utils/constants';

export const TableContent = ({
  trendingKeywords,
  keywords,
  selectedColumn,
}: TableContentProps): JSX.Element => {
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
  const [isMobile] = useMediaQuery(`(max-width: ${MOBILE_WIDTH})`);
  return (
    <Box overflowY="auto" h={`calc(100vh - ${PAGE_FOOTER_HEIGHT})`}>
      {keywords.map((keyword) => (
        <Box key={`${keyword.id}`} ml="4" mr="2" mt="1" mb="2">
          <Flex flexDirection="row">
            <TrendingKeyword
              content={keyword.keyword}
              id={keyword.id}
              trendingKeywords={trendingKeywords}
            />
            {isMobile ? (
              columnContent[selectedColumn](keyword)
            ) : (
              <>
                {columnContent[TableColumns.search_volume](keyword)}
                {columnContent[TableColumns.competition](keyword)}
                {columnContent[TableColumns.overall_score](keyword)}
              </>
            )}
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
