import { createLogger, format, transports, Logger } from 'winston';
import { name } from '../package.json';
import { APP_ENV } from '../app.config';

export type LoggerInput = {
  logLevel: string;
};

interface ErrorStringObject {
  error: string;
}

interface ErrorStackObject {
  error: string;
  stack: string;
}

type ErrorType = string | Error | ErrorStringObject | ErrorStackObject;

export const exceptionFormatter = (err: Error | string): ErrorType => {
  if (!err) {
    return err;
  }

  if (typeof err === 'string') {
    return { error: err };
  }

  return { error: err.message, stack: err.stack };
};

const initLogger = ({ logLevel }: LoggerInput): Logger =>
  createLogger({
    level: logLevel,
    defaultMeta: {
      correlationId: '',
      service: name,
      env: APP_ENV,
    },
    format: format.combine(
      format.timestamp(),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    ),
    transports: [
      new transports.Console({
        format: format.combine(
          format.printf(
            ({
              level,
              message,
              timestamp,
              correlationId,
              data,
              error,
              ...details
            }) =>
              JSON.stringify({
                timestamp,
                traceId: correlationId,
                level,
                message,
                ...details,
                data,
                error: exceptionFormatter(error),
              })
          )
        ),
      }),
    ],
  });

export const logger = initLogger({ logLevel: 'debug' });

export default initLogger;
