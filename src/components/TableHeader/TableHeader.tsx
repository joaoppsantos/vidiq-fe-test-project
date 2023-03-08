import { Box, Flex } from '@chakra-ui/react';
import { HeaderColumnType, TableColumns } from '../../utils/types';
import { ColumnSort } from '../ColumnSort/ColumnSort';
import { TableElement } from '../TableElement/TableElement';

export const TableHeader = () => {
  const headerColumn: HeaderColumnType = {
    [TableColumns.search_volume]: (
      <TableElement key={TableColumns.search_volume} isHeader>
        {<ColumnSort text={TableColumns.search_volume} />}
      </TableElement>
    ),
    [TableColumns.competition]: (
      <TableElement key={TableColumns.competition} isHeader>
        {<ColumnSort text={TableColumns.competition} />}
      </TableElement>
    ),
    [TableColumns.overall_score]: (
      <TableElement key={TableColumns.overall_score} isHeader>
        {<ColumnSort text={TableColumns.overall_score} />}
      </TableElement>
    ),
  };

  return (
    <Box
      boxShadow="md"
      height="2.5rem"
      mb="1"
      boxSize="full"
      paddingRight={'20px'}
    >
      <Flex>
        <TableElement key={TableColumns.keyword} isMainColumn isHeader>
          {<ColumnSort text={TableColumns.keyword} />}
        </TableElement>
        {Object.values(headerColumn)}
      </Flex>
    </Box>
  );
};
