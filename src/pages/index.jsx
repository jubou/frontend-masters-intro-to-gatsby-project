import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello Frontend Masters</h1>
      <Link to="/about">Go back to About </Link>
    </Layout>
  );
}
