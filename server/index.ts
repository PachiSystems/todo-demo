import next from 'next';
import init from './init';
import { logger } from './logger';
import { APP_ENV } from '../app.config';

let service: any;

const dev = APP_ENV !== 'production';
const nextJs = next({ dev });
const handle = nextJs.getRequestHandler();

type IPCSignal = 'SIGINT' | 'SIGTERM';
const GRACEFUL_SIGNALS: IPCSignal[] = ['SIGINT', 'SIGTERM'];

(async () => {
  service = init();
  try {
    nextJs
      .prepare()
      .then(async () => {
        await service.start(handle);
        logger.info(`> Service started`);
      })
      .catch((err) => logger.error(err));
  } catch (err) {
    logger.error('Service failed to start', err);
  }

  return GRACEFUL_SIGNALS.forEach((signal) => {
    process.once(signal, async () => {
      logger.info(`Received ${signal}, stopping service.`);
      if (service) await service.stop();
    });
  });
})();
