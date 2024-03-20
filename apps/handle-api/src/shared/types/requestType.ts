export enum RequestType {
  USERS = 'users',
  PARCS = 'parcs',
  BOOKINGS = 'bookings',
}

export type CustomError = {
  response: {
    data: {
      statusCode: number;
      message: string;
    };
  };
};
