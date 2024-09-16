import * as path from 'path';
import pino from 'pino';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    // target: path.resolve(__dirname, './config/logger/transport-rotating.js'),
    options: { dir: path.join(process.cwd(), 'logs') },
  },
});
