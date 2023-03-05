import { Box } from '@chakra-ui/react';
import { TableHeader } from '../TableHeader/TableHeader';

export const Table = () => {
  return (
    <Box h="full" role="table">
      <TableHeader />
    </Box>
  );
};
