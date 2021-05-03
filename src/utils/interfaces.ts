// Room
export interface RoomModel {
  id: string;
  name: string;
  level: number;
  capacity: number;
}

// Resident
export interface ResidentModel {
  id: number;
  name: string;
  genre: 'male' | 'female';
  stars: number;
  room: RoomModel;
}

// Skill
export interface SkillModel {
  id: number;
  material: string;
  maxLevel: number;
  title: string;
}

// SkillResident
export interface ResidentSkillModel {
  resident: ResidentModel;
  skill: SkillModel;
  level: number;
}
