# 🚀 CI/CD for Monorepo with Docker & GitHub Workflows

This project demonstrates a complete CI/CD pipeline setup using a **Turborepo** that includes a frontend, an HTTP backend, and a WebSocket server — all containerized with Docker and deployed to a **DigitalOcean VM** using **GitHub Actions**.

## 📁 Project Structure

```
.
├── apps/
│   ├── web/              # Next.js frontend
│   ├── http-backend/     # HTTP backend using Bun
│   └── websocket/        # WebSocket server using Bun
│
├── packages/
│   └── db/               # Shared Prisma setup
│
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.http-backend
│   └── Dockerfile.ws
│
├── .github/
│   └── workflows/
│       ├── web.yml
│       ├── http-backend.yml
│       └── websocket.yml
│
├── package.json          # Root script commands
└── ...
```

## 🧩 Features

- **Monorepo** managed by Turborepo
- **Three apps**: Next.js frontend, Bun HTTP backend, Bun WebSocket server
- Shared **Prisma** setup for all apps via the `db` package
- Each app is fully **Dockerized**
- **CI/CD** pipelines for all apps via GitHub Actions
- **Automated deployment** to a DigitalOcean VM

## ⚙️ Development

Each app contains its own `dev` and `start` scripts.

The root `package.json` manages monorepo-wide scripts:

## 🐳 Docker Setup

Dockerfiles are located inside the `docker/` directory:

- `Dockerfile.frontend` → apps/web
- `Dockerfile.http-backend` → apps/http-backend
- `Dockerfile.ws` → apps/websocket

Each GitHub workflow builds and pushes its respective image to **DockerHub** using these Dockerfiles.

## 🔁 GitHub Workflows

CI/CD is automated with GitHub Actions. Each app has a separate workflow:

- Build Docker image
- Push to DockerHub using a **Personal Access Token**
- SSH into the VM
- Stop and remove existing container
- Pull and run the new image

Ensure the following **GitHub Secrets** are set:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `DATABASE_URL`
- `SSH_PRIVATE_KEY`

---

## ☁️ Deployment

1. **Create a VM** on DigitalOcean and set up Docker.
2. **Add SSH key** and DockerHub token to GitHub Secrets.
3. On push to the respective app's branch:
   - Docker image is built and pushed
   - VM is accessed via SSH
   - Old container is removed
   - New container is run from the updated image

---

## ✅ Summary

- ✅ Turborepo for mono-repo management
- ✅ Bun + Prisma for backend performance
- ✅ Docker for containerization
- ✅ GitHub Actions for CI/CD
- ✅ DigitalOcean for deployment
- ✅ Secure secret management via GitHub Secrets
