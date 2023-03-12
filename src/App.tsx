import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import { KEYWORDS_TITLE, MOBILE_WIDTH } from './utils/constants';
import { Table } from './components/Table/Table';
import { SyntheticEvent, useState } from 'react';
import { TableColumns } from './utils/types';
import { SelectColumnMobile } from './components/SelectColumnMobile/SelectColumnMobile';

export const App = () => {
  const [selectedColumn, setSelectedColumn] = useState<string>(
    () => TableColumns.search_volume
  );
  const onHandleChange = (event: SyntheticEvent) => {
    setSelectedColumn((event.target as HTMLSelectElement).value);
  };
  const [isMobile] = useMediaQuery(`(max-width: ${MOBILE_WIDTH})`);

  return (
    <Box>
      <Flex
        flexDirection="row"
        justifyItems="center"
        justifyContent="space-between"
        height="4.25rem"
      >
        <Heading fontSize="1.125rem" m="auto" ml="4" color="black">
          {KEYWORDS_TITLE}
        </Heading>
        {isMobile && (
          <SelectColumnMobile
            onHandleChange={onHandleChange}
            selectedColumn={selectedColumn}
          />
        )}
      </Flex>
      <Table selectedColumn={selectedColumn} />
    </Box>
  );
};
