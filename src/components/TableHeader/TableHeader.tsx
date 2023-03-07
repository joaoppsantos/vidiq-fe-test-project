import { Box, Flex } from '@chakra-ui/react';
import { HeaderColumnType, TableColumns } from '../../utils/types';
import { ColumnSort } from '../ColumnSort/ColumnSort';
import { TableElement } from '../TableElement/TableElement';

export const TableHeader = () => {
  const headerColumn: HeaderColumnType = {
    [TableColumns.competition]: (
      <TableElement key={TableColumns.competition}>
        {<ColumnSort text={TableColumns.competition} />}
      </TableElement>
    ),
    [TableColumns.search_volume]: (
      <TableElement key={TableColumns.search_volume}>
        {<ColumnSort text={TableColumns.search_volume} />}
      </TableElement>
    ),
    [TableColumns.overall_score]: (
      <TableElement key={TableColumns.overall_score}>
        {<ColumnSort text={TableColumns.overall_score} />}
      </TableElement>
    ),
  };

  return (
    <Box boxShadow="md">
      <Flex>
        <TableElement key={TableColumns.keyword}>
          {<ColumnSort text={TableColumns.keyword} />}
        </TableElement>
        {Object.values(headerColumn)}
      </Flex>
    </Box>
  );
};
