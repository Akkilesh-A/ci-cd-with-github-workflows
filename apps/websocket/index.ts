import { prismaClient } from "@repo/db/client";

Bun.serve({
  port: 8080,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    message(ws, message) {
      prismaClient.user.create({
        data: {
          username: Math.random().toString(),
          password: Math.random().toString(),
        },
      });
      ws.send(message);
    },
    open(ws) {
      console.log("WebSocket connection opened");
      ws.send("Hello from Bun!");
    },
  },
});
