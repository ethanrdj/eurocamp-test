import { FC } from 'react';
import { CustomError } from '../types/requestType';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';

type ErrorStateProps = {
  error: CustomError['response']['data'];
};

export const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  return (
    <VStack w="full" p={20} align="center">
      <Heading color="red" as="h1" size="2xl">
        {error.statusCode}
      </Heading>
      <Heading color="red" as="h2" size="xl">
        {error.message}
      </Heading>
      <Text as="h2" fontSize="xl" fontWeight={600}>
        It looks like something went wrong, please try again
      </Text>
    </VStack>
  );
};
