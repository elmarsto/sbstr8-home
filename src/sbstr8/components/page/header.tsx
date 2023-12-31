import { ReactNode, FunctionComponent, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link as defaultLinkComponent,
  LinkProps,
} from '@/sbstr8/components/link';
import ccn from '@sindresorhus/class-names';
import cfg from '@/../sbstr8.config';
import { menu, MenuItem } from '@/sbstr8/lib/menu';
import useOverride from '@/sbstr8/lib/hook/server/override';

export interface PageHeaderProps {
  children?: ReactNode;
  className?: string;
  logoClassName?: string;
  menuItemClassName?: string;
  style?: CSSProperties;
  LinkComponent?: FunctionComponent<LinkProps>;
}
export const PageHeader = async ({
  children,
  className,
  logoClassName,
  menuItemClassName,
  style,
  LinkComponent,
}: PageHeaderProps) => {
  const overLink = await useOverride(defaultLinkComponent);
  const Link = LinkComponent || overLink;
  return (
    <header style={style} className={ccn('s8-page-header', className)}>
      <nav className="s8-page-header-nav">
        <span className={ccn('s8-page-header-nav-logo', logoClassName)}>
          <Link href={cfg.link}>{children}</Link>
        </span>
        <menu className="s8-page-header-nav-menu">
          {menu.map(({ icon, iconic, href, title }: MenuItem, i: number) => (
            <li
              key={i}
              className={ccn('s8-page-header-nav-menu-item', menuItemClassName)}
            >
              <Link href={href}>
                {icon && (
                  <FontAwesomeIcon
                    className="s8-page-header-nav-menu-item-icon"
                    icon={icon}
                    size="sm"
                  />
                )}
                {!iconic && (
                  <span className="s8-page-header-nav-menu-item-text">
                    {title}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </menu>
      </nav>
    </header>
  );
};
export default PageHeader;
