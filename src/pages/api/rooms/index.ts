import { VercelRequest, VercelResponse } from '@vercel/node';

const readAll = (
  request: VercelRequest,
  response: VercelResponse
): VercelResponse =>
  response.json([{ id: '1', name: 'Tesouraria', level: 9, capacity: 6 }]);

export default readAll;
