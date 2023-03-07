import { Flex, Stack, Text, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ColumnSortProps } from '../../utils/types';

export const ColumnSort = ({ text }: ColumnSortProps) => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Text>{text}</Text>
      <Stack direction="column" spacing="3px">
        <IconButton
          aria-label="Sort Ascending"
          icon={<ChevronUpIcon />}
          backgroundColor="#fff"
          p="0"
          height="0.4rem"
          width="1rem"
          minW="0.2rem"
          m="0"
        />
        <IconButton
          aria-label="Sort Descending"
          icon={<ChevronDownIcon />}
          backgroundColor="#fff"
          p="0"
          height="0.4rem"
          minW="0.2rem"
          width="1rem"
        />
      </Stack>
    </Flex>
  );
};
