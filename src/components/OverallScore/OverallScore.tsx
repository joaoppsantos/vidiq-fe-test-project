import { Flex } from '@chakra-ui/react';
import { OverallScoreProps } from '../../utils/types';

export const OverallScore = ({ score }: OverallScoreProps) => {
  const getColor = () =>
    score <= 20
      ? 'red.500'
      : score <= 40
      ? 'orange.400'
      : score <= 75
      ? 'yellow.400'
      : 'green.400';

  return (
    <Flex
      width="2rem"
      height="1.3rem"
      mt="2"
      borderRadius="1rem"
      justifyContent="center"
      backgroundColor={getColor()}
      color="whiteAlpha.900"
      alignItems="center"
    >
      {score}
    </Flex>
  );
};
