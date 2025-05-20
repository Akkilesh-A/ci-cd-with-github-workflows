import React from "react";
import { prismaClient } from "@repo/db/client";

const HomePage = async () => {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
