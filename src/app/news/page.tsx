import { gql } from '@apollo/client';
import { sClient } from '@/sbstr8/lib/graphql/server';
import { LedeList } from '@/sbstr8/components/lede-list';

const query = gql`
  query {
    lastModified
    posts {
      date
      description
      image
      slug
      thumbnail
      title
    }
  }
`;

const News = async () => {
  const {
    data: { posts },
  } = await sClient.query({ query });
  return (
    <>
      <h1>News</h1>
      <LedeList>{posts}</LedeList>
    </>
  );
};

export default News;
