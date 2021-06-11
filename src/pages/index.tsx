import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import styled from 'styled-components';

import Wallpaper from '../assets/01W7.webp';
import { Input } from '../components';
import { consoleTron } from '../utils';
import db from '../utils/db';
import { ResidentModel, RoomModel, SkillModel } from '../utils/interfaces';

const Container = styled.div<{
  activePanel: 'Rooms' | 'Residents' | 'Skills';
  activeSubPanel: 'Create' | 'Read';
}>`
  width: 100vw;
  height: 100vh;

  background: url(${Wallpaper});
  background-size: cover;

  display: flex;
  justify-content: center;
  flex-direction: column;

  main {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 10fr 1fr;

    width: 100vw;
    height: 100vh;

    button {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.4);
      font-size: 16pt;
      padding: 8px 0;
      width: 100%;
      outline: none;
      text-align: left;

      &:hover {
        transition: 0.4s;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.08);
      }

      &.${(props) => props.activePanel} {
        color: rgba(255, 255, 255, 0.8);
      }

      &.${(props) => props.activeSubPanel} {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    #left,
    #center,
    #right {
      display: grid;
      padding: 96px 48px;
      align-content: center;
    }

    .logo {
      height: 48px;
      width: 48px;
    }

    #left {
      justify-items: left;
    }

    #center {
      align-content: center;
      justify-items: center;
      padding: 96px 8px;

      .panel {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        padding: 32px;
        background: rgba(255, 255, 255, 0.2);
        filter: blur(2);

        form {
          display: grid;
          grid-column-gap: 8px;
          margin-bottom: 8px;
          border-radius: 4px;
          padding: 6px;
          background: rgba(255, 255, 255, 0.4);

          label {
            text-align: left;
            display: grid;

            input,
            select {
              &[type='number'] {
                text-align: center;
              }

              &::placeholder {
                color: rgba(0, 0, 0, 0.2);
              }

              padding: 8px 16px;
              border-radius: 4px;
              border: none;
              background-color: rgba(255, 255, 255, 0.6);
              font-size: 14pt;
              color: rgba(0, 0, 0, 0.6);

              width: 100%;
            }

            width: 100%;
          }

          div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 8px;
          }

          button {
            padding: 8px 24px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.6);
            font-size: 14pt;
            color: rgba(0, 0, 0, 0.6);

            &:hover {
              background-color: rgba(255, 255, 255, 1);
            }

            width: 100%;
          }
        }

        &.panelRoom {
          form {
            grid-template-columns: 8fr 2fr 2fr 1fr;
          }
        }

        &.panelResident {
          form {
            grid-template-columns: 4fr 4fr 2fr 4fr 1fr;
          }
        }

        &.panelSkill {
          form {
            grid-template-columns: 4fr 4fr 2fr 1fr;
          }
        }
      }
    }

    #right {
      justify-items: right;

      button {
        text-align: right;
      }
    }
  }
`;

const RoomCRUD = ({ mode }: { mode: 'Create' | 'Read' }) => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const refreshRooms = () => {
    db.room.read().then((r) => setRooms(r.data));
    consoleTron({ content: 'refreshRooms()' });
  };

  useEffect(() => refreshRooms(), []);
  useEffect(() => consoleTron({ content: { rooms } }), [rooms]);

  const [roomForm, setRoomForm] = useState<RoomModel>({
    name: '',
    level: 0,
    capacity: 0,
  });

  const handleCreateRoom = (e) => {
    e.preventDefault();
    db.room.create(roomForm).then((r) => {
      consoleTron({ content: { handleCreateRoom: r } });
      refreshRooms();
    });
  };
  const handleDeleteRoom = (id: number) =>
    db.room.delete(id).then((r) => {
      consoleTron({ content: { handleDeleteRoom: r } });
      refreshRooms();
    });
  const handleUpdateRoom = (id: number) => {
    db.room.update(rooms.filter((room) => room.id === id)[0]).then((r) => {
      consoleTron({ content: { handleUpdateRoom: r } });
      refreshRooms();
    });
  };

  return (
    <div className="panel panelRoom">
      <h2>Rooms</h2>
      <br />
      {mode === 'Create' && (
        <form>
          <Input
            label=""
            placeHolder="Nome"
            type="text"
            name="name"
            value={roomForm.name}
            onChange={(e) => setRoomForm({ ...roomForm, name: e.target.value })}
          />
          <Input
            label=""
            placeHolder="Nível"
            type="number"
            name="level"
            value={roomForm.level}
            onChange={(e) =>
              setRoomForm({
                ...roomForm,
                level: parseInt(e.target.value, 10),
              })
            }
          />
          <Input
            label=""
            placeHolder="Capacidade"
            type="number"
            name="capacity"
            value={roomForm.capacity}
            onChange={(e) =>
              setRoomForm({
                ...roomForm,
                capacity: parseInt(e.target.value, 10),
              })
            }
          />
          <button type="submit" onClick={handleCreateRoom}>
            Adicionar
          </button>
        </form>
      )}
      {mode === 'Read' && (
        <>
          <div>
            <h3>Nome</h3>
            <h3>Nível</h3>
            <h3>Capacidade</h3>
            <div>
              <div>&#10007;</div>
              <div>&#10003;</div>
            </div>
          </div>
          {rooms.map((room) => (
            <form key={room.id}>
              <Input
                label=""
                placeHolder="Nome:"
                type="text"
                name="name"
                value={room.name}
                onChange={(e) =>
                  setRooms(
                    rooms.map((o) => ({
                      ...o,
                      name: o.id === room.id ? e.target.value : o.name,
                    }))
                  )
                }
              />
              <Input
                label=""
                placeHolder="Nível:"
                type="number"
                name="level"
                value={room.level}
                onChange={(e) =>
                  setRooms(
                    rooms.map((o) => ({
                      ...o,
                      level:
                        o.id === room.id
                          ? parseInt(e.target.value, 10)
                          : o.level,
                    }))
                  )
                }
              />
              <Input
                label=""
                placeHolder="Capacidade:"
                type="number"
                name="capacity"
                value={room.capacity}
                onChange={(e) =>
                  setRooms(
                    rooms.map((o) => ({
                      ...o,
                      capacity:
                        o.id === room.id
                          ? parseInt(e.target.value, 10)
                          : o.capacity,
                    }))
                  )
                }
              />
              <div>
                <button onClick={() => handleDeleteRoom(room.id)} type="button">
                  &#10007;
                </button>
                <button onClick={() => handleUpdateRoom(room.id)} type="button">
                  &#10003;
                </button>
              </div>
            </form>
          ))}
        </>
      )}
    </div>
  );
};

const ResidentCRUD = ({ mode }: { mode: 'Create' | 'Read' }) => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const refreshRooms = () => {
    db.room.read().then((r) => setRooms(r.data));
    consoleTron({ content: 'refreshRooms()' });
  };

  const [residents, setResidents] = useState<ResidentModel[]>([]);
  const refreshResidents = () => {
    refreshRooms();
    db.resident.read().then((r) => setResidents(r.data));
    consoleTron({ content: 'refreshResidents()' });
  };

  useEffect(() => {
    refreshRooms();
    refreshResidents();
  }, []);
  useEffect(() => consoleTron({ content: { residents } }), [residents]);

  const [residentForm, setResidentForm] = useState<ResidentModel>({
    name: '',
    genre: 'male',
    stars: 1,
    room: rooms[0],
  });

  const handleCreateResident = (e) => {
    e.preventDefault();
    db.resident.create(residentForm).then((r) => {
      consoleTron({ content: { residentForm, handleCreateResident: r } });
      refreshResidents();
    });
  };
  const handleDeleteResident = (id: number) =>
    db.resident.delete(id).then((r) => {
      consoleTron({ content: { handleDeleteResident: r } });
      refreshResidents();
    });
  const handleUpdateResident = (id: number) => {
    db.resident
      .update(residents.filter((resident) => resident.id === id)[0])
      .then((r) => {
        consoleTron({ content: { handleUpdateResident: r } });
        refreshResidents();
      });
  };

  return (
    <div className="panel panelResident">
      <h2>Residents</h2>
      <br />
      {mode === 'Create' && (
        <form>
          <Input
            label=""
            placeHolder="Nome"
            type="text"
            name="name"
            value={residentForm.name}
            onChange={(e) =>
              setResidentForm({ ...residentForm, name: e.target.value })
            }
          />
          <Input
            label=""
            placeHolder="Gênero"
            type="select"
            name="genre"
            options={[
              { value: 'male', text: 'Masculino' },
              { value: 'female', text: 'Feminino' },
            ]}
            value={residentForm.genre}
            onChange={(e) =>
              setResidentForm({
                ...residentForm,
                // @ts-ignore
                genre: e.target.value,
              })
            }
          />
          <Input
            label=""
            placeHolder="Estrelas"
            type="number"
            name="stars"
            value={residentForm.stars}
            onChange={(e) =>
              setResidentForm({
                ...residentForm,
                stars: parseInt(e.target.value, 10),
              })
            }
          />
          <Input
            label=""
            placeHolder="Room"
            type="select"
            name="room"
            options={rooms.map((room) => ({
              value: room.id,
              text: room.name,
            }))}
            value={residentForm.room}
            onChange={(e) =>
              setResidentForm({
                ...residentForm,
                room: parseInt(e.target.value, 10),
              })
            }
          />
          <button type="submit" onClick={handleCreateResident}>
            Adicionar
          </button>
        </form>
      )}
      {mode === 'Read' &&
        residents.map((resident) => (
          <form key={resident.id}>
            <Input
              label=""
              placeHolder="Nome"
              type="text"
              name="name"
              value={resident.name}
              onChange={(e) =>
                setResidents(
                  residents.map((o) => ({
                    ...o,
                    name: o.id === resident.id ? e.target.value : o.name,
                  }))
                )
              }
            />
            <Input
              label=""
              placeHolder="Gênero"
              type="select"
              name="genre"
              value={resident.genre}
              options={[
                { value: 'male', text: 'Masculino' },
                { value: 'female', text: 'Feminino' },
              ]}
              onChange={(e) =>
                setResidents(
                  // @ts-ignore
                  residents.map((o) => ({
                    ...o,
                    genre: o.id === resident.id ? e.target.value : o.genre,
                  }))
                )
              }
            />
            <Input
              label=""
              placeHolder="Estrelas"
              type="number"
              name="stars"
              value={resident.stars}
              onChange={(e) =>
                setResidents(
                  residents.map((o) => ({
                    ...o,
                    stars:
                      o.id === resident.id
                        ? parseInt(e.target.value, 10)
                        : o.stars,
                  }))
                )
              }
            />
            <Input
              label=""
              placeHolder="Room"
              type="select"
              name="room"
              value={resident.room}
              options={rooms.map((room) => ({
                value: room.id,
                text: room.name,
              }))}
              onChange={(e) =>
                setResidents(
                  residents.map((o) => ({
                    ...o,
                    room:
                      o.id === resident.id
                        ? parseInt(e.target.value, 10)
                        : o.room,
                  }))
                )
              }
            />
            <div>
              <button
                onClick={() => handleDeleteResident(resident.id)}
                type="button"
              >
                &#10007;
              </button>
              <button
                onClick={() => handleUpdateResident(resident.id)}
                type="button"
              >
                &#10003;
              </button>
            </div>
          </form>
        ))}
    </div>
  );
};

const SkillCRUD = ({ mode }: { mode: 'Create' | 'Read' }) => {
  const [skills, setSkills] = useState<SkillModel[]>([]);
  const refreshSkills = () => {
    db.skill.read().then((r) => setSkills(r.data));
    consoleTron({ content: 'refreshSkills()' });
  };

  useEffect(() => refreshSkills(), []);
  useEffect(() => consoleTron({ content: { skills } }), [skills]);

  const [skillForm, setSkillForm] = useState<SkillModel>({
    title: '',
    material: '',
    maxLevel: 1,
  });

  const handleCreateSkill = (e) => {
    e.preventDefault();
    db.skill.create(skillForm).then((s) => {
      consoleTron({ content: { skillForm, handleCreateSkill: s } });
      refreshSkills();
    });
  };
  const handleDeleteSkill = (id: number) =>
    db.skill.delete(id).then((s) => {
      consoleTron({ content: { handleDeleteSkill: s } });
      refreshSkills();
    });
  const handleUpdateSkill = (id: number) => {
    db.skill.update(skills.filter((skill) => skill.id === id)[0]).then((s) => {
      consoleTron({ content: { handleUpdateSkill: s } });
      refreshSkills();
    });
  };

  return (
    <div className="panel panelSkill">
      <h2>Skills</h2>
      <br />
      {mode === 'Create' && (
        <form>
          <Input
            label=""
            placeHolder="Título"
            type="text"
            name="title"
            value={skillForm.title}
            onChange={(e) =>
              setSkillForm({ ...skillForm, title: e.target.value })
            }
          />
          <Input
            label=""
            placeHolder="Material"
            type="text"
            name="material"
            value={skillForm.material}
            onChange={(e) =>
              setSkillForm({
                ...skillForm,
                material: e.target.value,
              })
            }
          />
          <Input
            label=""
            placeHolder="Nível máximo"
            type="number"
            name="maxLevel"
            value={skillForm.maxLevel}
            onChange={(e) =>
              setSkillForm({
                ...skillForm,
                maxLevel: parseInt(e.target.value, 10),
              })
            }
          />
          <button type="submit" onClick={handleCreateSkill}>
            Adicionar
          </button>
        </form>
      )}
      {mode === 'Read' &&
        skills.map((skill) => (
          <form key={skill.id}>
            <Input
              label=""
              placeHolder="Título"
              type="text"
              name="title"
              value={skill.title}
              onChange={(e) =>
                setSkills(
                  skills.map((o) => ({
                    ...o,
                    title: o.id === skill.id ? e.target.value : o.title,
                  }))
                )
              }
            />
            <Input
              label=""
              placeHolder="Material"
              type="text"
              name="material"
              value={skill.material}
              onChange={(e) =>
                setSkills(
                  skills.map((o) => ({
                    ...o,
                    material: o.id === skill.id ? e.target.value : o.material,
                  }))
                )
              }
            />
            <Input
              label=""
              placeHolder="Nível Máximo"
              type="number"
              name="maxLevel"
              value={skill.maxLevel}
              onChange={(e) =>
                setSkills(
                  skills.map((o) => ({
                    ...o,
                    maxLevel:
                      o.id === skill.id
                        ? parseInt(e.target.value, 10)
                        : o.maxLevel,
                  }))
                )
              }
            />
            <div>
              <button onClick={() => handleDeleteSkill(skill.id)} type="button">
                &#10007;
              </button>
              <button onClick={() => handleUpdateSkill(skill.id)} type="button">
                &#10003;
              </button>
            </div>
          </form>
        ))}
    </div>
  );
};

const Home: React.FC = () => {
  const panels = ['Rooms', 'Residents', 'Skills'];
  const [activePanel, setActivePanel] = useState<
    'Rooms' | 'Residents' | 'Skills'
  >('Rooms');

  const subPanels = ['Create', 'Read'];
  const [activeSubPanel, setActiveSubPanel] = useState<'Create' | 'Read'>(
    'Read'
  );

  return (
    <Container activePanel={activePanel} activeSubPanel={activeSubPanel}>
      <Head>
        <title>Gradientes</title>
      </Head>

      <main>
        <div id="left">
          <div>
            {panels.map((panel) => (
              <button
                key={panel}
                type="button"
                className={panel}
                // @ts-ignore
                onClick={() => setActivePanel(panel)}
              >
                {panel}
              </button>
            ))}
          </div>
        </div>
        <div id="center">
          {activePanel === 'Rooms' && <RoomCRUD mode={activeSubPanel} />}
          {activePanel === 'Residents' && (
            <ResidentCRUD mode={activeSubPanel} />
          )}
          {activePanel === 'Skills' && <SkillCRUD mode={activeSubPanel} />}
        </div>
        <div id="right">
          <div>
            {subPanels.map((panel) => (
              <button
                key={panel}
                type="button"
                className={panel}
                // @ts-ignore
                onClick={() => setActiveSubPanel(panel)}
              >
                {panel}
              </button>
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Home;
