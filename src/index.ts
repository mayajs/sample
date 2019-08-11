import { Express, Request, Response } from "express";
import server from "./app.module";
import http from "http";

class Maya {
  constructor(private app: Express) {
    this.unhandleErrors(app);
  }

  start(port?: number | string): void {
    port = this.normalizePort(port || 3333);
    const server = http.createServer(this.app);
    server.listen(port, this.onListen(port));
  }

  normalizePort(val: any): number {
    const port = parseInt(val, 10);
    return isNaN(port) ? val : port;
  }

  onListen(port: any): () => void {
    return () => console.log("\x1b[32mListening on port:", `\x1b[36m${port}\x1b[0m`);
  }

  unhandleErrors(app: Express): void {
    app.use((req: Request, res: Response) => {
      if (!req.route) {
        const url = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
        res.status(405).json({ status: "Invalid Request", message: `Request: (${req.method}) ${url} is invalid!` });
      }
    });
  }
}

const app = new Maya(server.app);
app.start(process.env.PORT);
