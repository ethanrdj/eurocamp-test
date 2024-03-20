import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

type SuccessStateProps = {
  label: string;
};

export const SuccessState: FC<SuccessStateProps> = ({ label }) => {
  return (
    <Box p={20}>
      <Heading>{label}</Heading>
    </Box>
  );
};
