import { QueryResolvers, User } from '../../types/schemas';
import { EmailAddressMock, DateTimeMock, URLMock } from 'graphql-scalars';

const Query: QueryResolvers = {
  users: () => users,
  user: (_, args) => {
    const user = users.find((u) => u.id === args.id);

    if (typeof user === 'undefined') {
      throw new Error();
    }

    return {
      id: user.id,
      did: user.did,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
      homePage: user.homePage,
      books: user.books,
    };
  },
};

export const userResolver = { Query };

const users: User[] = [
  {
    id: 'user_01',
    did: 'did:foo:bar',
    name: 'name_01',
    email: `01-${EmailAddressMock()}`,
    birthDate: DateTimeMock(),
    homePage: URLMock(),
    books: [],
  },
  {
    id: 'user_02',
    did: 'did:foo:hoge02',
    name: 'name_02',
    email: `02-${EmailAddressMock()}`,
    birthDate: DateTimeMock(),
    homePage: URLMock(),
    books: [],
  },
];
