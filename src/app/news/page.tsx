import { gql } from '@apollo/client';
import Image from '@/sbstr8/components/image';
import { PageHeader } from '@/sbstr8/components/page/header';
import { sClient } from '@/sbstr8/lib/graphql/server';
import { LedeList } from '@/sbstr8/components/lede-list';

const query = gql`
  query {
    lastModified
    posts {
      created
      description
      image
      slug
      thumbnail
      title
      updated
    }
  }
`;
export interface PostsParams {
  dateClassName?: string;
  descriptionClassName?: string;
  headerClassName?: string;
  readMoreClassName?: string;
  titleClassName?: string;
}

const News = async () => {
  const {
    data: { posts },
  } = await sClient.query({ query });
  return (
    <div className="s8-page s8-page-posts">
      <PageHeader className="s8-page-header s8-page-posts-header">
        <div className="glow">
          <Image
            src="/media/logo-logotype.svg"
            width={190}
            height={190}
            alt="logo"
          />
        </div>
      </PageHeader>
      <main className="s8-page-main s8-page-posts-main">
        <LedeList>{posts}</LedeList>
      </main>
    </div>
  );
};

export default News;
