import { FC, useState } from 'react';
import { RequestType } from '../../shared/types/requestType';
import { VStack } from '@chakra-ui/react';
import { useHandleNetworkRequests } from '../../shared/hooks/useHandleNetworkRequests';
import { ErrorState } from '../../shared/components/ErrorState';
import { ButtonGroup } from '../../shared/components/ButtonGroup';
import { SuccessState } from '../../shared/components/SuccessState';

export const FetchItems: FC = () => {
  const { getData, error } = useHandleNetworkRequests();
  const [dataCount, setDataCount] = useState<number | null>(null);

  const fetchData = async (type: RequestType) => {
    try {
      const response = await getData(type);
      setDataCount(response.data.length);
    } catch (error) {
      setDataCount(null);
    }
  };

  return (
    <VStack w="full" align="start">
      <ButtonGroup
        label="Fetch"
        onClickUser={fetchData}
        onClickParcs={fetchData}
        onClickBooking={fetchData}
      />

      {dataCount && (
        <SuccessState label={`Succesful request - ${dataCount} items found`} />
      )}
      {error && <ErrorState error={error.response.data} />}
    </VStack>
  );
};
