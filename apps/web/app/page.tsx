import React from "react";
import { prismaClient } from "@repo/db/client";

const HomePage = async () => {
  const users = await prismaClient.user.findMany();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          color: "#374151",
        }}
      >
        Users
      </h1>
      <ul
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          borderRadius: "0.375rem",
          padding: "1.5rem",
          marginBottom: "1rem",
          minWidth: "300px",
        }}
      >
        {users.map((user) => (
          <li key={user.id} style={{ padding: "0.5rem 0", color: "#4b5563" }}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

// export const revalidate = 60 // revalidate every 60 seconds
// or
export const dynamic = "force-dynamic";
