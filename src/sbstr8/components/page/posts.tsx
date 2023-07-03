import urlJoin from 'url-join';
import ccn from '@sindresorhus/class-names';
import { gql } from '@apollo/client';
import cfg from '@/../sbstr8.config';
import defaultCard from '@/sbstr8/components/card';
import defaultLink from '@/sbstr8/components/link';
import defaultImage from '@/sbstr8/components/image';
import defaultPageHeader from '@/sbstr8/components/page/header';
import defaultBlurb from '@/sbstr8/components/blurb';
import defaultStandardPage from '@/sbstr8/components/page/standard';
import defaultMd from '@/sbstr8/components/md';
import defaultReadMore from '@/sbstr8/components/read-more';
import { CookedPostMetadata } from '@/sbstr8/lib/types/post';
import { sClient } from '@/sbstr8/lib/graphql/server';
import useOverride from '@/sbstr8/lib/hook/server/override';

const LOGO_SZ = 32;
const defaultLogo = '/media/sbstr8.svg';

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

const THUMB_SZ = 256;
const THUMB_DEFAULT = '/media/sbstr8.svg';
const defaultPostPath = '/posts';

const slugToHref = (slug: string) =>
  urlJoin(cfg.postPath || defaultPostPath, slug);

export interface PostsParams {
  dateClassName?: string;
  descriptionClassName?: string;
  headerClassName?: string;
  readMoreClassName?: string;
  titleClassName?: string;
}

export const postsMaker =
  ({
    dateClassName,
    descriptionClassName,
    headerClassName,
    readMoreClassName,
    titleClassName,
  }: PostsParams) =>
  async () => {
    const PageHeader = await useOverride(defaultPageHeader);
    const Card = await useOverride(defaultCard);
    const Link = await useOverride(defaultLink);
    const Image = await useOverride(defaultImage);
    const Blurb = await useOverride(defaultBlurb);
    const StandardPage = await useOverride(defaultStandardPage);
    const Md = await useOverride(defaultMd);
    const ReadMore = await useOverride(defaultReadMore);
    const pic = cfg.icon || defaultLogo;
    const {
      data: { posts },
    } = await sClient.query({ query });
    return (
      <div className="sbstr8:page-posts">
        <PageHeader
          className={ccn('sbstr8:page-posts-header', headerClassName)}
        >
          <Image src={pic} width={LOGO_SZ} height={LOGO_SZ} alt="logo" />
        </PageHeader>
        <StandardPage className="sbstr8:page-posts-page">
          {posts.map(
            (
              {
                created,
                description,
                image,
                slug,
                thumbnail,
                title,
                updated,
              }: CookedPostMetadata,
              i: number,
            ) => {
              const pic = thumbnail || image || THUMB_DEFAULT;
              return (
                <Card key={i} className="sbstr8:page-posts-post">
                  <Link
                    href={slugToHref(slug)}
                    className="sbstr8:page-posts-post-thumbnail"
                  >
                    <Image
                      src={pic}
                      alt={title}
                      width={THUMB_SZ}
                      height={THUMB_SZ}
                    />
                  </Link>
                  <Blurb
                    style={{ height: THUMB_SZ }}
                    className="sbstr8:page-posts-post-body"
                    title={
                      <h2 className="sbstr8:page-posts-post-body-title">
                        <Link
                          href={slugToHref(slug)}
                          className={titleClassName}
                        >
                          {title}
                        </Link>
                      </h2>
                    }
                  >
                    <h3 className="sbstr8:page-posts-post-body-date">
                      <span
                        className={ccn(
                          'sbstr8:page-posts-post-body-date-created-date',
                          dateClassName,
                        )}
                      >
                        {created}
                      </span>
                      {updated && (
                        <em className="sbstr8:page-posts-post-body-date-updated">
                          &mdash;updated{' '}
                          <span
                            className={ccn(
                              'sbstr8:page-posts-post-body-date-updated-date',
                              dateClassName,
                            )}
                          >
                            {updated}
                          </span>
                        </em>
                      )}
                    </h3>
                    <Md
                      className={ccn(
                        'sbstr8:page-posts-post-body-description',
                        descriptionClassName,
                      )}
                    >
                      {description}
                    </Md>
                    <ReadMore
                      href={slugToHref(slug)}
                      className={ccn(
                        'sbstr8:page-posts-post-body-read-more',
                        readMoreClassName,
                      )}
                    />
                  </Blurb>
                </Card>
              );
            },
          )}
        </StandardPage>
      </div>
    );
  };

export default postsMaker;
