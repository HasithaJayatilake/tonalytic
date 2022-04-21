import { createLogger, format, transports } from 'winston';
// import config from '@server/config/config';

const { combine, prettyPrint, splat, simple, colorize } = format;

const logger = createLogger({
    // level: config.env === 'development' ? 'debug' : 'info',
    format: combine(colorize(), prettyPrint(), splat(), simple()),
    transports: [new transports.Console()],
});

export default logger;
