import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import styled from 'styled-components';

import { Input } from '../components';
import { Container } from '../styles/pages/Home';
import { consoleTron } from '../utils';
import db from '../utils/db';
import { ResidentModel, RoomModel, SkillModel } from '../utils/interfaces';

const Form = styled.form`
  padding: 16px;

  display: grid;

  div {
    display: grid;
    grid-column-gap: 8px;
    &#roomForm {
      grid-template-columns: 4fr 4fr 4fr 1fr;
    }
    &#residentForm {
      grid-template-columns: 4fr 4fr 4fr 4fr 1fr;
    }
    &#skillForm {
      grid-template-columns: 4fr 4fr 4fr 1fr;
    }
  }

  label {
    text-align: left;
    display: grid;

    input,
    select {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      text-align: center;
      margin-bottom: 8px;

      width: 100%;
    }

    width: 100%;
  }

  button {
    border: white 2px solid;
    padding: 8px 16px;
    border-radius: 4px;

    margin-top: 24px;
    margin-bottom: 8px;

    width: 100%;
  }
`;

const FormRows = styled.form`
  padding: 4px 16px;

  display: grid;
  grid-column-gap: 8px;
  &#roomForm {
    grid-template-columns: 4fr 4fr 4fr 1fr 1fr;
  }
  &#residentForm {
    grid-template-columns: 4fr 4fr 4fr 4fr 1fr 1fr;
  }
  &#skillForm {
    grid-template-columns: 4fr 4fr 4fr 1fr 1fr;
  }

  label {
    text-align: left;
    display: grid;
    font-size: 14px;

    input,
    select {
      font-size: 16px;
      padding: 8px 16px;
      border-radius: 4px;
      color: white;
      background-color: #000;
      border: 2px solid white;
      text-align: center;
      margin-bottom: 8px;

      width: 100%;
    }

    width: 100%;
  }

  button {
    border: white 2px solid;
    padding: 8px 16px;
    border-radius: 4px;

    margin-top: 16px;
    margin-bottom: 8px;

    width: 100%;
  }
`;

const Tabs = styled.div<{ activeTab: 'rooms' | 'residents' | 'skills' }>`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;

  #rooms {
    transition: 0.4s;
    background-color: rgba(
      255,
      255,
      255,
      ${(props) => (props.activeTab === 'rooms' ? 0.4 : 0.02)}
    );
    border: 2px solid transparent;

    &:hover {
      border-color: white;
    }
  }

  #residents {
    transition: 0.4s;
    background-color: rgba(
      255,
      255,
      255,
      ${(props) => (props.activeTab === 'residents' ? 0.4 : 0.02)}
    );
    border: 2px solid transparent;

    &:hover {
      border-color: white;
    }
  }

  #skills {
    transition: 0.4s;
    background-color: rgba(
      255,
      255,
      255,
      ${(props) => (props.activeTab === 'skills' ? 0.4 : 0.02)}
    );
    border: 2px solid transparent;

    &:hover {
      border-color: white;
    }
  }
`;

const Panels = styled.div<{ activeTab: 'rooms' | 'residents' | 'skills' }>`
  padding-top: 16px;

  #roomsPanels {
    display: ${(props) => (props.activeTab === 'rooms' ? 'block' : 'none')};
  }

  #residentsPanels {
    display: ${(props) => (props.activeTab === 'residents' ? 'block' : 'none')};
  }

  #skillsPanels {
    display: ${(props) => (props.activeTab === 'skills' ? 'block' : 'none')};
  }
`;

const Home: React.FC = () => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const refreshRooms = () => {
    db.room.read().then((r) => setRooms(r.data));
    consoleTron({ content: 'refreshRooms()' });
  };

  const [residents, setResidents] = useState<ResidentModel[]>([]);
  const refreshResidents = () => {
    db.resident.read().then((r) => setResidents(r.data));
    consoleTron({ content: 'refreshResidents()' });
  };

  const [skills, setSkills] = useState<SkillModel[]>([]);
  const refreshSkills = () => {
    db.skill.read().then((r) => setSkills(r.data));
    consoleTron({ content: 'refreshSkills()' });
  };

  useEffect(() => {
    refreshRooms();
    refreshResidents();
    refreshSkills();
  }, []);

  useEffect(() => consoleTron({ content: { rooms, residents, skills } }), [
    rooms,
    residents,
    skills,
  ]);

  const [roomForm, setRoomForm] = useState<RoomModel>({
    name: '',
    level: 0,
    capacity: 0,
  });
  const [residentForm, setResidentForm] = useState<ResidentModel>({
    name: '',
    genre: 'male',
    stars: 1,
    room: rooms[0],
  });
  const [skillForm, setSkillForm] = useState<SkillModel>({
    title: '',
    material: '',
    maxLevel: 1,
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

  if (!rooms) {
    return <h1>loading...</h1>;
  }

  const [activeTab, setActiveTab] = useState<'rooms' | 'residents' | 'skills'>(
    'residents'
  );

  return (
    <Container>
      <Head>
        <title>Castle Monitor</title>
      </Head>

      <main>
        <div className="left" />
        <div className="right">
          <h1>Castle Monitor</h1>
          <Tabs activeTab={activeTab}>
            <button
              type="button"
              id="rooms"
              onClick={() => setActiveTab('rooms')}
            >
              Rooms
            </button>
            <button
              type="button"
              id="residents"
              onClick={() => setActiveTab('residents')}
            >
              Residents
            </button>
            <button
              type="button"
              id="skills"
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
          </Tabs>
          <Panels activeTab={activeTab}>
            <div id="roomsPanels">
              <h3>Rooms</h3>
              <Form>
                <h4>Create</h4>
                <div id="roomForm">
                  <Input
                    label="Nome:"
                    type="text"
                    name="name"
                    value={roomForm.name}
                    onChange={(e) =>
                      setRoomForm({ ...roomForm, name: e.target.value })
                    }
                  />
                  <Input
                    label="Nível:"
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
                    label="Capacidade:"
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
                    Enviar
                  </button>
                </div>
              </Form>
              {rooms.map((room) => (
                <FormRows key={room.id} id="roomForm">
                  <Input
                    label="Nome:"
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
                    label="Nível:"
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
                    label="Capacidade:"
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
                  <button
                    onClick={() => handleDeleteRoom(room.id)}
                    type="button"
                  >
                    &#10007;
                  </button>
                  <button
                    onClick={() => handleUpdateRoom(room.id)}
                    type="button"
                  >
                    &#10003;
                  </button>
                </FormRows>
              ))}
            </div>
            <div id="residentsPanels">
              <h3>Residents</h3>
              <Form>
                <h4>Create</h4>
                <div id="residentForm">
                  <Input
                    label="Nome:"
                    type="text"
                    name="name"
                    value={residentForm.name}
                    onChange={(e) =>
                      setResidentForm({ ...residentForm, name: e.target.value })
                    }
                  />
                  <Input
                    label="Gênero:"
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
                    label="Estrelas:"
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
                    label="Room:"
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
                    Enviar
                  </button>
                </div>
              </Form>
              {residents.map((resident) => (
                <FormRows key={resident.id} id="residentForm">
                  <Input
                    label="Nome:"
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
                    label="Gênero:"
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
                          genre:
                            o.id === resident.id ? e.target.value : o.genre,
                        }))
                      )
                    }
                  />
                  <Input
                    label="Estrelas:"
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
                    label="Room:"
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
                </FormRows>
              ))}
            </div>
            <div id="skillsPanels">
              <h3>Skills</h3>
              <Form>
                <h4>Create</h4>
                <div id="skillForm">
                  <Input
                    label="Título:"
                    type="text"
                    name="title"
                    value={skillForm.title}
                    onChange={(e) =>
                      setSkillForm({ ...skillForm, title: e.target.value })
                    }
                  />
                  <Input
                    label="Material:"
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
                    label="Nível máximo:"
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
                    Enviar
                  </button>
                </div>
              </Form>
              {skills.map((skill) => (
                <FormRows key={skill.id} id="skillForm">
                  <Input
                    label="Título:"
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
                    label="Material:"
                    type="text"
                    name="material"
                    value={skill.material}
                    onChange={(e) =>
                      setSkills(
                        skills.map((o) => ({
                          ...o,
                          material:
                            o.id === skill.id ? e.target.value : o.material,
                        }))
                      )
                    }
                  />
                  <Input
                    label="Nível Máximo:"
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
                  <button
                    onClick={() => handleDeleteSkill(skill.id)}
                    type="button"
                  >
                    &#10007;
                  </button>
                  <button
                    onClick={() => handleUpdateSkill(skill.id)}
                    type="button"
                  >
                    &#10003;
                  </button>
                </FormRows>
              ))}
            </div>
          </Panels>
        </div>
      </main>
    </Container>
  );
};

export default Home;
