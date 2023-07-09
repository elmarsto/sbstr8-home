import meta from './meta.json';

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
export default Layout;

export const metadata = {
  description: meta.description,
  keywords: [meta.title],
  openGraph: {
    description: meta.description,
    title: meta.title,
    type: 'article',
  },
  title: meta.title,
};
