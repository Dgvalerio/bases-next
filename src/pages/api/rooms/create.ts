import { VercelRequest, VercelResponse } from '@vercel/node';

const create = (
  request: VercelRequest,
  response: VercelResponse
): VercelResponse => {
  const { name } = request.body;

  return response.json({ post: { name } });
};

export default create;
