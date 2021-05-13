/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from '../config/supabase';
import { consoleTron } from './index';
import {
  ResidentModel,
  ResidentSkillModel,
  RoomModel,
  SkillModel,
} from './interfaces';

const table = {
  room: 'room',
  resident: 'resident',
  residentSkill: 'resident_skill',
  skill: 'skill',
};

export default {
  room: {
    create: (input: RoomModel): Promise<{ data: RoomModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase.from(table.room).insert([input]);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    read: (query = `*`): Promise<{ data: RoomModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase.from(table.room).select(query);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    update: (input: RoomModel): Promise<{ data: RoomModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase.from(table.room).upsert(input);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    delete: (id: number): Promise<{ data: RoomModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.room)
          .delete()
          // @ts-ignore
          .match({ id });
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
  },
  resident: {
    create: (
      input: ResidentModel
    ): Promise<{ data: ResidentModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.resident)
          .insert([input]);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    read: (query = `*`): Promise<{ data: ResidentModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.resident)
          .select(query);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    update: (
      input: ResidentModel
    ): Promise<{ data: ResidentModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.resident)
          .upsert(input);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    delete: (id: number): Promise<{ data: ResidentModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.resident)
          .delete()
          // @ts-ignore
          .match({ id });
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
  },
  residentSkill: {
    create: (
      input: ResidentSkillModel
    ): Promise<{ data: ResidentSkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.residentSkill)
          .insert([input]);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    read: (
      query = `*`
    ): Promise<{ data: ResidentSkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.residentSkill)
          .select(query);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    update: (
      input: ResidentSkillModel
    ): Promise<{ data: ResidentSkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.residentSkill)
          .upsert(input);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    delete: (
      id: number
    ): Promise<{ data: ResidentSkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.residentSkill)
          .delete()
          // @ts-ignore
          .match({ id });
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
  },
  skill: {
    create: (
      input: SkillModel
    ): Promise<{ data: SkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.skill)
          .insert([input]);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    read: (query = `*`): Promise<{ data: SkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase.from(table.skill).select(query);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    update: (
      input: SkillModel
    ): Promise<{ data: SkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase.from(table.skill).upsert(input);
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
    delete: (id: number): Promise<{ data: SkillModel[]; error: any }> => {
      const run = async () => {
        const { data, error } = await supabase
          .from(table.skill)
          .delete()
          // @ts-ignore
          .match({ id });
        if (error) {
          consoleTron({ type: 'error', content: error });
        }

        return { data, error };
      };

      return run();
    },
  },
};
