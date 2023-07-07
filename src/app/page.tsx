import { ReactNode } from 'react';
import { gql } from '@apollo/client';
import ccn from '@sindresorhus/class-names';
import cfg from '@/../sbstr8.config';
import ReadMore from '@/sbstr8/components/read-more';
import Feature from '@/sbstr8/components/feature';
import Image from '@/sbstr8/components/image';
import { PageHeader } from '@/sbstr8/components/page/header';
import { Post } from '@/sbstr8/lib/types/post';
import LedeList from '@/sbstr8/components/lede-list';
import { sClient } from '@/sbstr8/lib/graphql/server';

const LOGO_SZ = 32;

const defaultPostPath = '/posts/';
const defaultLogo = '/media/sbstr8.svg';
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
        <Image src={logo} width={LOGO_SZ} height={LOGO_SZ} alt="logo" />
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
