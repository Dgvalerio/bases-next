import React from 'react';

import Head from 'next/head';

import { useAxios } from '../hooks/useFetch';
import { Container } from '../styles/pages/Home';
import { RoomModel } from '../utils/interfaces';
import { back } from '../utils/routes';

const Home: React.FC = () => {
  const { data: residents } = useAxios<RoomModel[]>(back.room.readAll());

  const handleNameChange = (id: number) => console.tron.log({ id });

  if (!residents) {
    return <h1>loading...</h1>;
  }

  return (
    <Container>
      <Head>
        <title>Castle Monitor</title>
      </Head>

      <main>
        <div className="left" />
        <div className="right">
          <h1>Castle Monitor</h1>
          <h3>Rooms</h3>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>level</th>
                <th>capacity</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.level}</td>
                  <td>{user.capacity}</td>
                  <td>
                    <button onClick={() => handleNameChange(2)} type="button">
                      handleNameChange
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
};

export default Home;
