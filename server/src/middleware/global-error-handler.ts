import {
    Middleware,
    ExpressErrorMiddlewareInterface,
    HttpError,
} from 'routing-controllers';
import { NextFunction, Request, Response } from 'express';
import logger from '@server/logger';
import _ from 'lodash';
import { QueryFailedError } from 'typeorm';
import { Service } from 'typedi';

@Middleware({ type: 'after' })
export default class GlobalErrorHandler
    implements ExpressErrorMiddlewareInterface {
    error(err: any, _req: Request, res: Response, next: NextFunction) {
        if (!err) {
            next();
            return;
        }

        if (err instanceof HttpError) {
            process.env.NODE_ENV === 'development' &&
                logger.debug('Handled error', err);

            return res.status(err.httpCode).send({
                error: _.startCase(err.name).split(' ').slice(0, -1).join(' '),
                message: err.message,
                ...((err as any).errors && { errors: (err as any).errors }),
            });
        } else if (err instanceof QueryFailedError) {
            logger.error('[GlobalErroHandler] QueryFailedError: %o', err);
            return res.status(400).send({
                error: 'Bad Request',
            });
        }
        logger.error('[GlobalErroHandler] Unhandled Error thrown:\n%o', err);
        res.status(500).send({
            error: 'Server Error',
        });
    }
}
