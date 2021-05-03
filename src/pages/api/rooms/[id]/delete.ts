import { VercelRequest, VercelResponse } from '@vercel/node';

const deleteOne = (
  request: VercelRequest,
  response: VercelResponse
): VercelResponse => {
  const {
    query: { id },
  } = request;

  return response.json({ deleteOne: { id } });
};

export default deleteOne;
