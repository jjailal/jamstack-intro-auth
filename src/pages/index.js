import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <h1>This is an app!</h1>
    <p>You can log in.</p>
    <Link to="/dashboard">Get in 😈</Link>
  </Layout>
);

export default Index;
