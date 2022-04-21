import path from 'path';

type Env = 'development' | 'staging' | 'production';

export interface ServerConfiguration {
    env: Env;
    port: number;
    /** host should include protocol (ie. https/http) */
    host: string;
}

let config: ServerConfiguration;

(() => {
    const env = <Env>process.env.NODE_ENV || 'development';
    const configFilePath = path.resolve(
        __dirname,
        `../../configuration/config.${env}.json`
    );
    try {
        config = require(configFilePath);
        config.env = env;
    } catch (err) {
        throw new Error(
            `error loading configuration from [${configFilePath}]: ${err}`
        );
    }
})();

export default config;
