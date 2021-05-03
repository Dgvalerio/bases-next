import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';
import { UserModel } from '../utils/interfaces';
import { back } from '../utils/routes';

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    axios.get(back.user.readAll()).then((res) => setUsers(res.data));

    axios
      .post(back.user.create(), { name: 'Davi' })
      .then((createOne) => console.tron.log({ createOne }));
    axios
      .get(back.user.readOne(1))
      .then((readOne) => console.tron.log({ readOne }));
    axios
      .get(back.user.readAll())
      .then((readAll) => console.tron.log({ readAll }));
    axios
      .put(back.user.update(2), { name: 'Davi' })
      .then((updateOne) => console.tron.log({ updateOne }));
    axios
      .delete(back.user.delete(3))
      .then((deleteOne) => console.tron.log({ deleteOne }));
  }, []);

  return (
    <Container>
      <Head>
        <title>Início</title>
      </Head>

      <main>
        <div className="left" />
        <div className="right">
          <h1>Estrutura Next.js</h1>
          <p>Uma estrutura de projeto com ReactJS + Next.js.</p>
          {users.map((user) => (
            <p key={user.id}>
              [{user.id}] {user.name}
            </p>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default Home;
