// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { News } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  res.status(200).json([{ id: 1, name: 'test' }, { id: 2, name: 'test2' }]);
}
