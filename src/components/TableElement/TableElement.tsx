import { Box } from '@chakra-ui/react';
import { TableElementProps } from '../../utils/types';

export const TableElement = ({
  children,
  isMainColumn,
  isHeader,
}: TableElementProps) => (
  <Box
    fontSize="0.75rem"
    fontWeight="medium"
    lineHeight="1rem"
    color={isHeader ? 'blackAlpha.700' : 'blackAlpha.900'}
    flex={isMainColumn ? '3' : '1'}
    pb="3"
    pt="2"
    alignItems="center"
    margin="auto"
  >
    {children}
  </Box>
);
