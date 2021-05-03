import React, { useCallback } from 'react';

import axios from 'axios';
import Head from 'next/head';
import { mutate as globalMutate } from 'swr';

import { useAxios } from '../hooks/useFetch';
import { Container } from '../styles/pages/Home';
import { UserModel } from '../utils/interfaces';
import { back } from '../utils/routes';

const Home: React.FC = () => {
  const { data: users, mutate } = useAxios<UserModel[]>(back.user.readAll());

  const handleNameChange = useCallback((id: number) => {
    const updatedUsers = users?.map((user) => {
      if (user.id === id) {
        return { ...user, name: 'Davi' };
      }

      return user;
    });

    axios
      .put(back.user.update(id), { name: 'Davi' })
      .then((updateOne) => console.tron.log({ update: updateOne.data }));

    mutate(updatedUsers, false);
    globalMutate(back.user.update(id), { id, name: 'Davi' });
  }, []);

  if (!users) {
    return <h1>loading...</h1>;
  }

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
          <button onClick={() => handleNameChange(2)} type="button">
            handleNameChange
          </button>
        </div>
      </main>
    </Container>
  );
};

export default Home;
