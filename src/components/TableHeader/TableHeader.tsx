import { Box, Flex } from '@chakra-ui/react';
import { TableElement } from '../TableElement/TableElement';

export const TableHeader = () => {
  return (
    <Box>
      <Flex flexDirection="row">
        <TableElement>Teste</TableElement>
      </Flex>
    </Box>
  );
};
