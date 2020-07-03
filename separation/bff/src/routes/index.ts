import * as express from "express";

export const register = (app: express.Application) => {
    app.get("/", (req: express.Request, res: express.Response) => {
        res.send("Backends For Frontends");
    });
    app.get("/bff/test", (req: express.Request, res: express.Response) => {
        res.send("Backends For Frontends Test Request...");
    });
}