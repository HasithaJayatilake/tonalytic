import { Client as NotionClient, LogLevel } from "@notionhq/client";
import { Service } from "typedi";
import config from "@server/config/config";
import logger from "@server/logger";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

@Service()
export default class NotionService {
    private readonly notionClient: NotionClient;
    private readonly databaseId: string;

    constructor() {
        this.notionClient = new NotionClient({
            auth: config.notion.secret,
            logLevel: LogLevel.DEBUG,
        });
        this.databaseId = config.notion.databaseId;
    }

    public async getBlogPageList() {
        const response: QueryDatabaseResponse =
            await this.notionClient.databases.query({
                database_id: this.databaseId,
            });
        logger.info("Database Pages: %o", response);

        const pageIdList = response.results.map((page: any) => {
            return { id: page.id, properties: page.properties };
        });
        logger.info("Database Page Ids: %o", pageIdList);
        return pageIdList;
    }
}
