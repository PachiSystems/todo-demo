import express from 'express';
import http from 'http';
import promBundle from 'express-prom-bundle';
import promClient from 'prom-client';
import { name, version } from '../package.json';

import { logger } from './logger';
import { APP_PORT } from '../app.config';

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  metricsPath: '/api/metrics',
});

export default function init() {
  let server: http.Server;
  async function start(handle: any) {
    const app = express();
    app.use(metricsMiddleware);
    app.get('/_health', (_req, res) => res.json({ version }));
    app.all('*', handle as any);

    const { collectDefaultMetrics } = promClient;
    collectDefaultMetrics();

    return new Promise((resolve, reject) => {
      server = app.listen(APP_PORT, () => {
        logger.info(
          `> Attempting start of ${name} at http://localhost:${APP_PORT}`
        );
        resolve({ app });
      });
      server.on('error', (err) => {
        logger.error(err);
        reject(err);
        return err;
      });
    });
  }

  async function stop() {
    return new Promise<void>((resolve, reject) => {
      server.close((err: any) => {
        return err ? reject(err) : resolve();
      });
    });
  }

  return { start, stop };
}
