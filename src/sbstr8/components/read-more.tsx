import * as React from 'react';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import ccn from '@sindresorhus/class-names';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const READ_MORE = 'Read More';
export interface ReadMoreProps extends LinkProps {
  children?: React.ReactNode;
  iconClassName?: string;
  LinkComponent?: React.FunctionComponent<LinkProps>;
}

export const ReadMore = ({
  children,
  iconClassName,
  className,
  LinkComponent,
  ...otherProps
}: ReadMoreProps) => {
  const Link = LinkComponent || defaultLinkComponent;

  const kids = children || <>{READ_MORE}</>;
  return (
    <Link className={ccn('sbstr8:read-more', className)} {...otherProps}>
      <div className="flex flex-row items-center">
        <div className={ccn('sbstr8:read-more-text', 'pr-1')}>{kids}</div>
        <FontAwesomeIcon
          icon={faPlay}
          style={{ width: '1rem', height: '1rem' }}
          className={ccn('sbstr8:read-more-icon', iconClassName)}
        />
      </div>
    </Link>
  );
};

export default ReadMore;
