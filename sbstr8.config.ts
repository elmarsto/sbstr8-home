import { Config } from '@/sbstr8/lib/types/config';
import { faQuestion, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import defaults from '@/sbstr8/lib/default';
// import Link from '@/sbstr8/components/link';
// import Feature from '@/sbstr8/components/feature';
export const env = process.env.NODE_ENV;
export const isProd = env === 'production';
export const defaultAuthor = {
  email: 'hello@lizmars.net',
  link: 'https://lizmars.net/',
  name: 'Elizabeth Marston',
};
export const config: Config = {
  categories: ['Blog'],
  copyright: 'All rights reserved.',
  description: 'Sbstr8 Home Page',
  keywords: ['sbstr8'],
  language: 'en',
  link: isProd ? 'https://sbstr8.lizmars.net/' : 'http://127.0.0.1:3000',
  owners: [defaultAuthor],
  title: 'Sbstr8 Home',
  postPath: '/news',
  feedPath: '/feed',
  icon: '/media/logo.svg',
  image: '/media/logo-logotype.svg',
};
export default config;

// this export has to be here
export const override = new WeakMap();
override.set(defaults.menu, [
  { href: '/', icon: faQuestion, title: 'What Is' },
  { href: '/news', icon: faRss, title: 'News' },
  {
    href: 'https://github.com/elmarsto/sbstr8',
    icon: faGithub,
    title: 'GitHub',
  },
]);
// override.set(Link, import('./src/components/my-link'));
// override.set(Feature, import('./src/components/my-feature'));
