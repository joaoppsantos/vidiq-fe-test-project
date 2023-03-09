import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import { KEYWORDS_TITLE } from './utils/constants';
import { Table } from './components/Table/Table';

function App() {
  return (
    <Box>
      <Heading fontSize="1.125rem" ml="3" mt="3" mb="4" color="black">
        {KEYWORDS_TITLE}
      </Heading>
      <Table />
    </Box>
  );
}

export default App;
