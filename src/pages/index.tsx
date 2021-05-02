import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Início</title>
    </Head>

    <main>
      <div className="left" />
      <div className="right">
        <h1>Estrutura Next.js</h1>
        <p>Uma estrutura de projeto com ReactJS + Next.js.</p>
      </div>
    </main>
  </Container>
);

export default Home;
