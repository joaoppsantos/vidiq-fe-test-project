import { Box } from '@chakra-ui/react';
import { TableElementProps } from '../../utils/types';

export const TableElement = ({
  children,
  isMainColumn,
  isHeader,
}: TableElementProps) => (
  <Box
    fontSize="0.8rem"
    fontWeight="semibold"
    lineHeight="2rem"
    color={isHeader ? 'blackAlpha.700' : 'blackAlpha.900'}
    flex={isMainColumn ? '3' : '1'}
    p="1"
  >
    {children}
  </Box>
);
