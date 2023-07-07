import { CSSProperties, FunctionComponent } from 'react';
import useOverride from '@/sbstr8/lib/hook/server/override';
import ccn from '@sindresorhus/class-names';
import { mkShortDate } from '@/sbstr8/lib/date';
import { Post } from '@/sbstr8/lib/types/post';
import clss from './feature.module.css';
import {
  Image as defaultImageComponent,
  ImageProps,
} from '@/sbstr8/components/image';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';

const defaultImageWidth = 1024;
const defaultImageHeight = 512;
const defaultImage = '/media/sbstr8.svg';

export interface FeatureProps {
  post: Post;
  link: string;
  cut: 'primary' | 'secondary' | 'tertiary';
  imageWidth?: number;
  imageHeight?: number;
  authorClassName?: string;
  className?: string;
  dateClassName?: string;
  hookClassName?: string;
  imageClassName?: string;
  teaserClassName?: string;
  titleClassName?: string;
  style?: CSSProperties;
  ImageComponent?: FunctionComponent<ImageProps>;
  LinkComponent?: FunctionComponent<LinkProps>;
}

const Feature = async ({
  link,
  post: {
    meta: { image, title, created, updated, authors },
    Hook,
    Teaser,
  },
  cut,
  className,
  imageClassName,
  imageWidth,
  imageHeight,
  authorClassName,
  titleClassName,
  dateClassName,
  teaserClassName,
  hookClassName,
  style,
  ImageComponent,
  LinkComponent,
}: FeatureProps) => {
  const overLink = await useOverride(defaultLinkComponent);
  const overImage = await useOverride(defaultImageComponent);
  const date = mkShortDate(created, updated);
  const Link = LinkComponent || overLink;
  const Image = ImageComponent || overImage;
  return (
    <div
      className={ccn(
        's8-feature',
        `s8-feature-cut-${cut}`,
        clss[cut],
        className,
      )}
      style={style}
    >
      <Link className="s8-feature-image" href={link}>
        <Image
          className={imageClassName}
          src={image || defaultImage}
          width={imageWidth || defaultImageWidth}
          height={imageHeight || defaultImageHeight}
          alt={`Image for post entitled ${title}`}
        />
      </Link>
      <h1 className={ccn('s8-feature-title', clss['title'], titleClassName)}>
        <Link href={link}>{title}</Link>
      </h1>
      <h2 className={ccn('s8-feature-date', clss['date'], dateClassName)}>
        {date}
      </h2>
      <h2
        className={ccn('s8-feature-authors', clss['author'], authorClassName)}
      >
        {(authors || []).join(', ')}
      </h2>
      <div
        className={ccn('s8-feature-teaser', clss['teaser'], teaserClassName)}
      >
        <Teaser />
      </div>
      <Link
        className={ccn('s8-feature-hook', clss['hook'], hookClassName)}
        href={link}
      >
        <Hook />
      </Link>
    </div>
  );
};

export default Feature;
