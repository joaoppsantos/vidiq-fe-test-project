import { Box, Flex } from '@chakra-ui/react';
import { HeaderColumnType, TableColumns } from '../../utils/types';
import { ColumnSort } from '../ColumnSort/ColumnSort';
import { TableElement } from '../TableElement/TableElement';

export const TableHeader = () => {
  return (
    <Box>
      <Flex>
        <TableElement>
          {<ColumnSort text={TableColumns.keyword} />}
        </TableElement>
        <TableElement>
          {<ColumnSort text={TableColumns.competition} />}
        </TableElement>
        <TableElement>
          {<ColumnSort text={TableColumns.search_volume} />}
        </TableElement>
        <TableElement>
          {<ColumnSort text={TableColumns.overall_score} />}
        </TableElement>
      </Flex>
    </Box>
  );
};
