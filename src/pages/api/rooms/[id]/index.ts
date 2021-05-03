import { VercelRequest, VercelResponse } from '@vercel/node';

const readOne = (
  request: VercelRequest,
  response: VercelResponse
): VercelResponse => {
  const {
    query: { id },
  } = request;

  return response.json({ readOne: { id } });
};

export default readOne;
