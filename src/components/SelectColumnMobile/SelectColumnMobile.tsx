import { Box, Select } from '@chakra-ui/react';
import { SelectColumnMobileProps, TableColumns } from '../../utils/types';

export const SelectColumnMobile = ({
  onHandleChange,
  selectedColumn,
}: SelectColumnMobileProps) => {
  const columns = [
    TableColumns.search_volume,
    TableColumns.competition,
    TableColumns.overall_score,
  ];

  return (
    <Box mr="4" py="4">
      <Select
        borderRadius="6.25rem"
        onChange={onHandleChange}
        value={selectedColumn}
      >
        {columns.map((column) => (
          <option value={column} key={`column-${column}`}>
            {column}
          </option>
        ))}
      </Select>
    </Box>
  );
};
