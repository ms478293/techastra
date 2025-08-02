import 'dotenv/config';
import express from "express";
import { createServer } from "http";
import { setupVite, serveStatic, log } from "./vite";
import { registerRoutes } from "./routes";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const originalSend = res.send;
  res.send = function (data) {
    const duration = Date.now() - start;
    const truncatedData = typeof data === 'string' && data.length > 50 
      ? data.substring(0, 50) + '…' 
      : data;
    log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms :: ${JSON.stringify(truncatedData).substring(0, 100)}`);
    return originalSend.call(this, data);
  };
  next();
});

const port = process.env.PORT || 5000;

(async () => {
  const server = await registerRoutes(app);
  
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();