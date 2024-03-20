import { FC, useState } from 'react';
import { useHandleNetworkRequests } from '../../shared/hooks/useHandleNetworkRequests';
import { RequestType } from '../../shared/types/requestType';
import { ButtonGroup } from '../../shared/components/ButtonGroup';
import { ErrorState } from '../../shared/components/ErrorState';
import { VStack } from '@chakra-ui/react';
import { User } from '../../shared/types/user';
import { Parc } from '../../shared/types/parc';
import { Booking } from '../../shared/types/booking';
import { SuccessState } from '../../shared/components/SuccessState';

export const PostItems: FC = () => {
  const { postData, error } = useHandleNetworkRequests();
  const [newItem, setNewItem] = useState<{
    name: string;
    type: RequestType;
  } | null>(null);

  async function onPostData(
    type: RequestType,
    data: Partial<User> | Partial<Parc> | Partial<Booking>
  ) {
    if (!data) return;
    try {
      const response = await postData(type, data);
      setNewItem({ name: response.id as string, type });
    } catch (error) {
      setNewItem(null);
    }
  }

  return (
    <VStack w="full" align="start">
      <ButtonGroup
        label="Post"
        onClickUser={(type) =>
          onPostData(type, { name: 'New user', email: 'newUser@newUser.com' })
        }
        onClickParcs={(type) =>
          onPostData(type, {
            name: 'New parc',
            description: 'This is a new parc',
          })
        }
        onClickBooking={(type) =>
          onPostData(type, {
            user: '1',
            parc: '1',
            bookingdate: new Date(),
            comments: '',
          })
        }
      />

      {newItem && (
        <SuccessState
          label={`Succesful request - ${newItem.type} ${newItem.name} has been created`}
        />
      )}
      {error && <ErrorState error={error.response.data} />}
    </VStack>
  );
};
