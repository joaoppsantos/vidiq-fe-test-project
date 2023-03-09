import { Button, Flex } from '@chakra-ui/react';
import { PaginationProps } from '../../utils/types';

export const Pagination = ({
  pageLimit,
  count,
  onPaginate,
  currentPage,
}: PaginationProps): JSX.Element => {
  const pageCount = Math.ceil(count / pageLimit);
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  return (
    <Flex flexDirection="row" width="full" justifyContent="center" p="0.6rem">
      {pageNumbers.map((number) => (
        <Button
          variant={currentPage === number ? 'solid' : 'outline'}
          colorScheme="orange"
          mr="2"
          size="sm"
          aria-label={`Page ${number}`}
          key={`button-${number}`}
          onClick={() => onPaginate(number)}
        >
          {number}
        </Button>
      ))}
    </Flex>
  );
};
