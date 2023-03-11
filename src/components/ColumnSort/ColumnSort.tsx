import { Flex, Stack, Text, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ColumnSortProps, TableColumns } from '../../utils/types';

export const ColumnSort = ({ text, sortByColumn }: ColumnSortProps) => {
  const tableColumn: { [key: string]: string } = {
    [TableColumns.competition]: 'competition',
    [TableColumns.keyword]: 'keyword',
    [TableColumns.overall_score]: 'overall_score',
    [TableColumns.search_volume]: 'search_volume',
  };

  return (
    <Flex alignItems="center">
      <Text mr="1">{text}</Text>
      <Stack direction="column" spacing="3px">
        <IconButton
          aria-label="Sort Ascending"
          icon={<ChevronUpIcon />}
          backgroundColor="White"
          height="0.4rem"
          minW="0rem"
          onClick={() => sortByColumn(tableColumn[text], 'asc')}
        />
        <IconButton
          aria-label="Sort Descending"
          icon={<ChevronDownIcon />}
          backgroundColor="White"
          height="0.2rem"
          minW="0rem"
          onClick={() => sortByColumn(tableColumn[text], 'desc')}
        />
      </Stack>
    </Flex>
  );
};
