import { GraphQLScalarType, Kind, GraphQLError } from 'graphql';

const validate = (value: any) => {
  /**
   * DID Syntax
   * did = "did:" method-name ":" method-specific-id
   *
   * see: https://www.w3.org/TR/2021/PR-did-core-20210803/#did-syntax
   */
  const DID_REGEX =
    /^did:[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+:[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+$/;

  if (typeof value !== 'string') {
    throw new TypeError(`Value is not string: ${value}`);
  }

  if (!DID_REGEX.test(value)) {
    throw new TypeError(`Value is not a valid DID: ${value}`);
  }

  return value;
};

export const GraphQLDID = new GraphQLScalarType({
  name: 'DID',

  description:
    'A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/.',

  serialize: validate,

  parseValue: validate,

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as DID but got a: ${ast.kind}`
      );
    }

    return validate(ast.value);
  },

  specifiedByUrl: 'https://www.w3.org/TR/did-core/',
  extensions: {
    codegenScalarType: 'string',
  },
});
