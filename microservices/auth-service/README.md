# Auth Service Microservice

Authentication microservice for the Enterprise AI Knowledgebase platform.
Handles user registration, login, token generation (Access, Refresh, CSRF), and Redis session management.

## Features
- **Vercel Serverless Ready**: Configured with `api/index.js` and `vercel.json` rewrites.
- **Local Development Support**: Can still be run standalone using `npm run dev` or `npm start`.
- **Health Checks**: Built-in `/` and `/health` endpoints for status verification.
- **Mongoose Serverless Connection Pooling**: Caches MongoDB connection across serverless invocations.

---

## Deploying to Vercel

### Option 1: Via Vercel Dashboard (Recommended for Monorepos)
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
2. Import the `Enterprise-AI-knowledgebase` repository.
3. In **Project Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: Click *Edit* and select `microservices/auth-service`.
4. In **Environment Variables**, add the variables listed in `.env.example`:
   - `FRONTEND_URL`
   - `MONGO_URI`
   - `REDIS_URL`
   - `ACCESS_TOKEN_SECRET`
   - `REFRESH_TOKEN_SECRET`
   - `ACCESS_TOKEN_EXPIRATION` (e.g. `900`)
   - `REFRESH_TOKEN_EXPIRATION` (e.g. `604800`)
   - `CSRF_TOKEN_EXPIRATION` (e.g. `3600`)
   - `NODE_ENV` = `production`
5. Click **Deploy**.

### Option 2: Via Vercel CLI
From your terminal:
```bash
cd microservices/auth-service
npx vercel
```

---

## Local Development

1. Copy `.env.example` to `.env` and fill in the values:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Test health check:
   ```bash
   curl http://localhost:5000/health
   ```