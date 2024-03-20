import { FC, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { useHandleNetworkRequests } from '../../shared/hooks/useHandleNetworkRequests';
import { RequestType } from '../../shared/types/requestType';
import { ButtonGroup } from '../../shared/components/ButtonGroup';
import { ErrorState } from '../../shared/components/ErrorState';
import { SuccessState } from '../../shared/components/SuccessState';

export const FetchItemByID: FC = () => {
  const { getByID, error } = useHandleNetworkRequests();
  const [foundItem, setFoundItem] = useState<string | null>(null);

  async function onGetItemById(type: RequestType, id: string) {
    try {
      await getByID(type, id);
      setFoundItem(id);
    } catch (error) {
      setFoundItem(null);
    }
  }

  return (
    <VStack w="full" align="start">
      <ButtonGroup
        label="Get by ID"
        onClickUser={(type) =>
          onGetItemById(type, '3ad841e3-438c-4d89-8307-61665a426611')
        }
        onClickParcs={(type) => onGetItemById(type, '71544')}
        onClickBooking={(type) =>
          onGetItemById(type, '1d0011b9-7827-4fda-838f-9b868ebb7007')
        }
      />

      {foundItem && (
        <SuccessState label={`Succesful request - found item ${foundItem}`} />
      )}
      {error && <ErrorState error={error.response.data} />}
    </VStack>
  );
};
