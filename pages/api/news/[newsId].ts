// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { News } from '../../../types';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<News>
) {
    const { newsId } = req.query;
    res.status(200).json({ id: Number(newsId), name: `test${newsId}` });
}
