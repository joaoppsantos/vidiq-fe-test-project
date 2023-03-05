import { Box } from '@chakra-ui/react';
import { TableElementProps } from '../../utils/types';

export const TableElement = ({ children }: TableElementProps) => {
  return <Box>{children}</Box>;
};
