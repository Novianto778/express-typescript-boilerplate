import * as path from 'path';
import pino from 'pino';

export const logger = pino({
  transport: {
    target: './transport-rotating.mjs',
    options: { dir: path.join(process.cwd(), 'logs') },
  },
});
