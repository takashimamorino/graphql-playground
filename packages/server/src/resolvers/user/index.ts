import { QueryResolvers, User } from '../../types/schemas';
import { EmailAddressMock, DateTimeMock, URLMock } from 'graphql-scalars';

const Query: QueryResolvers = {
  users: () => users,
};

export const userResolver = { Query };

const users: User[] = [
  {
    id: 'user_01',
    name: 'name_01',
    email: `01-${EmailAddressMock()}`,
    birthDate: DateTimeMock(),
    homePage: URLMock(),
  },
  {
    id: 'user_02',
    name: 'name_02',
    email: `02-${EmailAddressMock()}`,
    birthDate: DateTimeMock(),
    homePage: URLMock(),
  },
];
