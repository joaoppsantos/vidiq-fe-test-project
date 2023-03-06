import { Flex, Stack, Text, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

interface ColumnSortProps {
  text: string;
}

export const ColumnSort = ({ text }: ColumnSortProps) => {
  return (
    <Flex flexDirection="row">
      <Text>{text}</Text>
      <Stack direction="column">
        <IconButton aria-label="Ascending" icon={<ChevronUpIcon />} />
        <IconButton aria-label="Descending" icon={<ChevronDownIcon />} />
      </Stack>
    </Flex>
  );
};
