import { Flex } from '@chakra-ui/react';
import {
  HIGH_SCORE_COLOR,
  LOW_SCORE_COLOR,
  VERY_LOW_SCORE_COLOR,
  MEDIUM_SCORE_COLOR,
  VERY_HIGH_SCORE_COLOR,
} from '../../utils/constants';
import { OverallScoreProps } from '../../utils/types';

export const OverallScore = ({ score }: OverallScoreProps) => {
  const getColor = () =>
    score <= 20
      ? VERY_LOW_SCORE_COLOR
      : score <= 40
      ? LOW_SCORE_COLOR
      : score <= 75
      ? MEDIUM_SCORE_COLOR
      : score <= 90
      ? HIGH_SCORE_COLOR
      : VERY_HIGH_SCORE_COLOR;

  return (
    <Flex
      width="2.2rem"
      height="1.5rem"
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
