import { FC } from 'react';
import { Button, Heading, HStack, VStack } from '@chakra-ui/react';
import { RequestType } from '../types/requestType';
import { User } from '../types/user';
import { Parc } from '../types/parc';
import { Booking } from '../types/booking';

type ButtonGroupProps = {
  label: string;
  onClickUser: (type: RequestType, data?: Partial<User>) => void;
  onClickParcs: (type: RequestType, data?: Partial<Parc>) => void;
  onClickBooking: (type: RequestType, data?: Partial<Booking>) => void;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({
  label,
  onClickUser,
  onClickParcs,
  onClickBooking,
}) => {
  return (
    <HStack>
      <Button onClick={() => onClickUser(RequestType.USERS)}>
        {`${label} Users`}
      </Button>

      <Button onClick={() => onClickParcs(RequestType.PARCS)}>
        {`${label} Parcs`}
      </Button>

      <Button onClick={() => onClickBooking(RequestType.BOOKINGS)}>
        {`${label} Bookings`}
      </Button>
    </HStack>
  );
};
