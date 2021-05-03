import { VercelRequest, VercelResponse } from '@vercel/node';

const updateOne = (
  request: VercelRequest,
  response: VercelResponse
): VercelResponse => {
  const {
    query: { id },
  } = request;
  const { name } = request.body;

  return response.json({ updateOne: { id, name } });
};

export default updateOne;
