import { gql } from '@apollo/client';
import cfg from '@/../sbstr8.config';
import Image from '@/sbstr8/components/image';
import { PageHeader } from '@/sbstr8/components/page/header';
import LedeList from '@/sbstr8/components/lede-list';
import { sClient } from '@/sbstr8/lib/graphql/server';

const defaultLogo = '/media/logo.svg';
const query = gql`
  query {
    lastModified
    posts {
      date
      description
      image
      thumbnail
      slug
      title
    }
  }
`;

const Root = async () => {
  const { data } = await sClient.query({ query });
  const logo = cfg.icon || defaultLogo;
  return (
    <div className="s8-page-root">
      <PageHeader className="s8-page-root-header">
        <Image src={logo} width={92} height={92} alt="logo" />
      </PageHeader>
      <main className="s8-page-root-main">
        <section className="s8-page-root-section-unfeatured">
          <LedeList>{data.posts}</LedeList>
        </section>
      </main>
    </div>
  );
};

export default Root;
