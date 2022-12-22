import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { initDB } from "./server/models";

const port = parseInt(process.env.HOSTPORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

async function bootstap() {
  try {
    await initDB();
    console.log("Connect to the database successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }

  const app = next({ dev });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url!, true);
      handle(req, res, parsedUrl);
    }).listen(port);
    
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
}

bootstap();