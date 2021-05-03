export const back = {
  user: {
    create: (): string => `/api/users/create`,
    readOne: (id: number): string => `/api/users/${id}`,
    readAll: (): string => `/api/users`,
    update: (id: number): string => `/api/users/${id}/update`,
    delete: (id: number): string => `/api/users/${id}/delete`,
  },
};
