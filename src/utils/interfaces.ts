// Room
export interface RoomModel {
  id?: number;
  name: string;
  level: number;
  capacity: number;
}

// Resident
export interface ResidentModel {
  id?: number;
  name: string;
  genre: 'male' | 'female';
  stars: number;
  room: RoomModel | number;
}

// Skill
export interface SkillModel {
  id?: number;
  material: string;
  maxLevel: number;
  title: string;
}

// SkillResident
export interface ResidentSkillModel {
  resident: ResidentModel | number;
  skill: SkillModel | number;
  level: number;
}
