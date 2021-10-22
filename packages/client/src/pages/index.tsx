import { NextPage } from 'next';
import { Books } from '../components/Books';

export const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Books</h1>
      <Books />
    </>
  );
};

export default IndexPage;
