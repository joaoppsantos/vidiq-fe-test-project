import './App.css';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { keywordsTitle } from './utils/constants';
import { Table } from './components/Table/Table';

function App() {
  return (
    <Box>
      <Flex>
        <Heading>{keywordsTitle}</Heading>
      </Flex>
      <Table />
    </Box>
  );
}

export default App;
