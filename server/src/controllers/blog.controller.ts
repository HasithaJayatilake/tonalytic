import {
    Authorized,
    BadRequestError,
    Body,
    CurrentUser,
    Get,
    JsonController,
    Param,
    Params,
    Post,
} from "routing-controllers";
import logger from "@server/logger";
import NotionService from "@server/services/notion-service";
import { Inject, Service } from "typedi";

@JsonController("/api/v1/blog")
@Service()
export default class BlogController {
    @Inject()
    private notionService: NotionService;

    @Get("/")
    async listBlogPosts() {
        const pageSummaryList = await this.notionService.getBlogPageList();
        return pageSummaryList;
    }
}
