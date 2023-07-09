import Link from '@/sbstr8/components/link';

const Root = () => (
  <>
    <h3>
      <em>Ahem,</em> it&apos;s pronounced &ldquo;substrate&rdquo;
    </h3>
    <div className="md:mt-20">
      <strong>sbstr8</strong> is a tool for rich storytelling and journalism,
      using open standards and the very latest tech stack.
    </div>
    <h3>Latest vibes</h3>
    <div className="md:mt-20">
      <strong>sbstr8</strong> is based on{' '}
      <Link href="//apollographql.com">Apollo GraphQL</Link>,{' '}
      <Link href="//react.dev">React</Link>, and{' '}
      <Link href="//nextjs.org">Next.js</Link>. It uses the recently-released
      &lsquo;App&rsquo; pattern from Next.js, which means it leverages{' '}
      <Link href="https://www.freecodecamp.org/news/react-server-components-for-beginners/">
        Server Components
      </Link>{' '}
      to give you the power of client-side React components with the great SEO
      properties of server-rendered HTML.
    </div>
    <h3>Three core values</h3>
    <ul className="md:mt-20 mb-10">
      <li className="mb-3">
        <strong>developer&nbsp;≡&nbsp;user</strong>
        <p>
          Developer experience is as important as user experience. The developer
          is the first user.
        </p>
      </li>
      <li className="mb-3">
        <strong>content&nbsp;≡&nbsp;code</strong>
        <p>
          Storytelling should effortlessly blend code, text, graphics,
          animation, and anything else a browser can render. Every article is an
          app, and vice versa. Code is a creative medium for storytelling.
        </p>
      </li>
      <li>
        <strong>yours&nbsp;≡&nbsp;yours</strong>
        <p>
          You own your work. All of it, nose-to-toes. This means first-class
          support for choosing your own host, spinning up your creation as a{' '}
          <Link href="https://vercel.com">Vercel</Link> app, a Docker container,
          or <Link href="https://kubernetes.io">Kubernetes</Link> Deployment. It
          means open standards, like RSS, and soon,{' '}
          <Link href="https://www.w3.org/TR/activitypub/">ActivityPub</Link>,{' '}
          <Link href="https://nostr.com"> Nostr</Link>, and{' '}
          <Link href="https://scuttlebutt.nz">Secure Scuttlebutt</Link>.{' '}
        </p>
      </li>
    </ul>
    <h3>
      <strong>Stop feeding the billionaires.</strong>
    </h3>
    <h3>Free your mind, and loosen your tongue.</h3>
  </>
);

export default Root;
