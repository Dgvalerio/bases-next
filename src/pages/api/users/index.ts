import { VercelRequest, VercelResponse } from '@vercel/node';

const readAll = (
  request: VercelRequest,
  response: VercelResponse
): VercelResponse =>
  response.json([
    { id: 1, name: 'Beatriz' },
    { id: 2, name: 'Davi' },
    { id: 3, name: 'Helen' },
    { id: 4, name: 'Hellem' },
    { id: 5, name: 'Jefferson' },
  ]);

export default readAll;
