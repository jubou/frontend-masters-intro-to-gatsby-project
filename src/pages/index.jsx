import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Seo from '../components/seo';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      <Seo />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello Frontend Masters</h1>
        <Link to="/about">Go back to About </Link>
      </main>
    </>
  );
}
