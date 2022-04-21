import express from "express";
import { Action, useExpressServer } from "routing-controllers";
import GlobalErrorHandler from "@server/middleware/global-error-handler";
import morgan from "morgan";

const app = express();

app.use(morgan(":method :url :status - :response-time ms"));

useExpressServer(app, {
    cors: true,
    validation: true,
    defaultErrorHandler: false,
    middlewares: [GlobalErrorHandler],
    // controllers: [],
});

app.use("/api/*", (req: express.Request, res: express.Response) => {
    if (!res.writableEnded) {
        res.status(404).json({
            error: "The requested resource does not exist on API",
            message: `Cannot ${req.method} ${req.url}`,
        });
    }
    res.end();
});

export default app;
