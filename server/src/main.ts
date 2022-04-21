import "reflect-metadata";
import "source-map-support/register";
import "module-alias/register";

import app from "@server/app";
import logger from "@server/logger";
import { Container } from 'typedi';
import { useContainer as routingUseContainer } from 'routing-controllers';
// import { Client, LogLevel } from "@notionhq/client";


const port = process.env.PORT || 8082;
const env = process.env.NODE_ENV || "development";

async function main() {
    logger.info(`Starting Web Server in ${env} mode...`);
    routingUseContainer(Container);
    
    app.listen(port, () => {
        logger.info(
            `Website [${env}] Server listening on http://localhost:${port}`
        );
    });
}

main();
