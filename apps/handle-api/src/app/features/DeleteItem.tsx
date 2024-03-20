import { FC, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { useHandleNetworkRequests } from '../../shared/hooks/useHandleNetworkRequests';
import { CustomError, RequestType } from '../../shared/types/requestType';
import { ButtonGroup } from '../../shared/components/ButtonGroup';
import { ErrorState } from '../../shared/components/ErrorState';
import { SuccessState } from '../../shared/components/SuccessState';

export const DeleteItem: FC = () => {
  const { deleteItem } = useHandleNetworkRequests();
  const [deletedItem, setDeletedItem] = useState<string | null>(null);
  const [error, setError] = useState<CustomError | null>(null);

  async function onDeleteItem(type: RequestType, id: string) {
    try {
      await deleteItem(type, id);
      setDeletedItem(id);
      setError(null);
    } catch (error) {
      setError(error as CustomError);
      setDeletedItem(null);
    }
  }

  return (
    <VStack w="full" align="start">
      <ButtonGroup
        label="Delete"
        onClickUser={(type) =>
          onDeleteItem(type, '3ad841e3-438c-4d89-8307-61665a426611')
        }
        onClickParcs={(type) => onDeleteItem(type, '71544')}
        onClickBooking={(type) =>
          onDeleteItem(type, '1d0011b9-7827-4fda-838f-9b868ebb7007')
        }
      />

      {deletedItem && (
        <SuccessState
          label={`Succesful request - deleted item ${deletedItem}`}
        />
      )}
      {error && <ErrorState error={error.response.data} />}
    </VStack>
  );
};
