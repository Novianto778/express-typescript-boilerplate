# 🚀 Express TypeScript Boilerplate 2024

## Heavily inspired by [express-typescript-boilerplate](https://github.com/edwinhern/express-typescript-2024)

[![Build Express Application](https://github.com/edwinhern/express-typescript-2024/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/edwinhern/express-typescript-2024/actions/workflows/build.yml)
[![CodeQL](https://github.com/edwinhern/express-typescript-2024/actions/workflows/codeql.yml/badge.svg?branch=master)](https://github.com/edwinhern/express-typescript-2024/actions/workflows/codeql.yml)
[![Docker Image CI](https://github.com/edwinhern/express-typescript-2024/actions/workflows/docker-image.yml/badge.svg?branch=master)](https://github.com/edwinhern/express-typescript-2024/actions/workflows/docker-image.yml)
[![Release](https://github.com/edwinhern/express-typescript-2024/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/edwinhern/express-typescript-2024/actions/workflows/release.yml)

## 🌟 Introduction

Welcome to the Express TypeScript Boilerplate 2024 – a streamlined, efficient, and scalable foundation for building powerful backend services. This boilerplate merges modern tools and practices in Express.js and TypeScript, enhancing productivity, code quality, and performance.

## 💡 Motivation and Intentions

Developed to streamline backend development, this boilerplate is your solution for:

- ✨ Reducing setup time for new projects.
- 📊 Ensuring code consistency and quality.
- ⚡ Facilitating rapid development with cutting-edge tools.
- 🛡️ Encouraging best practices in security, testing, and performance.

## 🚀 Features

- 📁 Modular Structure: Organized by feature for easy navigation and scalability.
- 💨 Faster Execution with tsx: Rapid TypeScript execution with esbuild, complemented by tsc for type checking.
- 🌐 Stable Node Environment: Latest LTS Node version in .nvmrc.
- 🔧 Simplified Environment Variables with Envalid: Centralized and easy-to-manage configuration.
- 🔗 Path Aliases: Cleaner code with shortcut imports.
- 🔄 Dependabot Integration: Automatic updates for secure and up-to-date dependencies.
- 🔒 Security: Helmet for HTTP header security and CORS setup.
- 📊 Logging: Efficient logging with pino-http.
- 🧪 Comprehensive Testing: Robust setup with Vitest and Supertest.
- 🔑 Code Quality Assurance: Husky and lint-staged for consistent quality.
- ✅ Unified Code Style: ESLint and Prettier for a consistent coding standard.
- 📃 API Response Standardization: ServiceResponse class for consistent API responses.
- 🐳 Docker Support: Ready for containerization and deployment.
- 📝 Input Validation with Zod: Strongly typed request validation using Zod.

## 🛠️ Getting Started

### Step 1: 🚀 Initial Setup

- Clone the repository: `git clone https://github.com/novianto778/express-typescript-boilerplate.git`
- Navigate: `cd express-typescript-boilerplate`
- Install dependencies: `pnpm install --frozen-lockfile`

### Step 2: ⚙️ Environment Configuration

- Create `.env`: Copy `.env.template` to `.env`
- Update `.env`: Fill in necessary environment variables

### Step 3: 🏃‍♂️ Running the Project

- Development Mode: `pnpm dev`
- Building: `pnpm build`
- Production Mode: Set `.env` to `NODE_ENV="production"` then `pnpm build && pnpm start`

## 📁 Project Structure

```
.
├── prisma
├── src/
│   ├── __tests__/
│   │   ├── auth/
│   │   │   ├── login.service.test.ts
│   │   │   ├── register.service.test.ts
│   │   │   └── ...
│   │   └── user/
│   │       └── same-structure-like-auth
│   ├── api/
│   │   ├── auth/
│   │   │   ├── services/
│   │   │   │   ├── login.service.ts
│   │   │   │   ├── register.service.ts
│   │   │   │   └── logout.service.ts
│   │   │   ├── repositories/
│   │   │   │   ├── login.repository.ts
│   │   │   │   └── register.repository.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.model.ts
│   │   │   ├── auth.router.ts
│   │   │   ├── auth.type.ts
│   │   │   └── auth.utils.ts
│   │   ├── user/
│   │   │   └── same-structure-like-auth
│   │   └── another-module
│   ├── config
│   ├── lib
│   ├── middleware
│   ├── models
│   ├── services
│   ├── config
│   ├── types
│   ├── utils
│   ├── global.d.ts
│   ├── index.ts
│   └── server.ts
└── .env

```

## 🤝 Feedback and Contributions

We'd love to hear your feedback and suggestions for further improvements. Feel free to contribute and join us in making backend development cleaner and faster!

🎉 Happy coding!
