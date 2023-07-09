import urlJoin from 'url-join';
import Image from '@/sbstr8/components/image';
import { PageHeader } from '@/sbstr8/components/page/header';
import pkg from '@/../package.json';
import cfg, { defaultAuthor } from '@/../sbstr8.config';
import defaults from '@/sbstr8/lib/default';
import '@/sbstr8/lib/style.css';
import './theme.css';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = async ({ children }: MainLayoutProps) => (
  <html>
    <body>
      <div className="s8-layout">
        <PageHeader className="s8-page-header s8-page-root-header">
          <div className="glow flex-col justify-start items-center">
            <Image
              src="/media/logo-logotype.svg"
              width={190}
              height={190}
              alt="logo"
            />
            <h4>sweet &amp; productive</h4>
          </div>
        </PageHeader>
        <main className="s8-page-main s8-page-root-main md:grid md:grid-cols-2">
          {children}
        </main>
      </div>
      <footer className="s8-layout-root-footer">
        <h6>
          &copy; {cfg.copyright}
          &nbsp; Built with{' '}
          <a href="https://github.com/elmarsto/sbstr8">sbstr8</a>.
        </h6>
      </footer>
    </body>
  </html>
);
export default MainLayout;

export const metadata = {
  applicationName: cfg.title,
  authors: cfg.owners.map(({ name, link }) => ({ name, url: link })),
  alternates: {
    canonical: cfg.link,
    types: {
      'application/rss+xml': urlJoin(cfg.link, defaults.path.feed),
    },
  },
  category: cfg.categories.join('/'),
  creator: defaultAuthor.name,
  description: cfg.description,
  generator: pkg.name,
  keywords: cfg.keywords,
  metadataBase: new URL(cfg.link),
  openGraph: {
    description: cfg.description,
    locale: cfg.language,
    siteName: cfg.title,
    title: cfg.title,
    type: 'website',
    url: '/',
    images: cfg.image
      ? [
          {
            url: urlJoin(cfg.link, cfg.image),
          },
        ]
      : [],
  },
  publisher: pkg.author,
  robots: {
    follow: false, // don't follow; instead use @/app/sitemap.ts
    googleBot: {
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    index: true,
  },
  title: cfg.title,
  icons: {
    icon: cfg.icon,
    shortcut: cfg.icon,
    apple: cfg.icon,
  },
};
