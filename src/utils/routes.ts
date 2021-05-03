const generateCrudRoutes = (entity: string) => ({
  create: (): string => `/api/${entity}/create`,
  readOne: (id: number): string => `/api/${entity}/${id}`,
  readAll: (): string => `/api/${entity}`,
  update: (id: number): string => `/api/${entity}/${id}/update`,
  delete: (id: number): string => `/api/${entity}/${id}/delete`,
});

export const back = {
  resident: generateCrudRoutes('residents'),
  room: generateCrudRoutes('rooms'),
  skill: generateCrudRoutes('skills'),
};
