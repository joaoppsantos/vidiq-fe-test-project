import { Box, Flex } from '@chakra-ui/react';
import {
  HeaderColumnType,
  TableColumns,
  TableHeaderProps,
} from '../../utils/types';
import { ColumnSort } from '../ColumnSort/ColumnSort';
import { TableElement } from '../TableElement/TableElement';

export const TableHeader = ({ sortByColumn }: TableHeaderProps) => {
  const headerColumn: HeaderColumnType = {
    [TableColumns.search_volume]: (
      <TableElement key={TableColumns.search_volume} isHeader>
        {
          <ColumnSort
            text={TableColumns.search_volume}
            sortByColumn={sortByColumn}
          />
        }
      </TableElement>
    ),
    [TableColumns.competition]: (
      <TableElement key={TableColumns.competition} isHeader>
        {
          <ColumnSort
            text={TableColumns.competition}
            sortByColumn={sortByColumn}
          />
        }
      </TableElement>
    ),
    [TableColumns.overall_score]: (
      <TableElement key={TableColumns.overall_score} isHeader>
        {
          <ColumnSort
            text={TableColumns.overall_score}
            sortByColumn={sortByColumn}
          />
        }
      </TableElement>
    ),
  };

  return (
    <Box
      boxShadow="lg"
      height="2.5rem"
      mb="1"
      boxSize="full"
      paddingRight={'20px'}
      pl="2"
    >
      <Flex>
        <TableElement key={TableColumns.keyword} isMainColumn isHeader>
          {
            <ColumnSort
              text={TableColumns.keyword}
              sortByColumn={sortByColumn}
            />
          }
        </TableElement>
        {Object.values(headerColumn)}
      </Flex>
    </Box>
  );
};
