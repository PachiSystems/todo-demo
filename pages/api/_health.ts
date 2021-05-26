import type { NextApiRequest, NextApiResponse } from 'next';
import { version } from '../../package.json';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ version });
};
