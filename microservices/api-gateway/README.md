# API Gateway Microservice

API Gateway service for the Enterprise AI Knowledgebase platform.
Handles routing, request verification, token refresh rotation, CSRF validation, and downstream service proxying.

## Features
- **Vercel Serverless Ready**: Configured with `api/index.js` and `vercel.json` rewrites.
- **Local Development Support**: Can still be run standalone using `npm run dev` or `npm start`.
- **Health Checks**: Built-in `/` and `/health` endpoints for status verification.
- **Authentication & Proxying**:
  - `/auth/*` -> Proxied to `AUTH_SERVICE_URL`
  - `/knowmatrix/:service/*` -> Authenticated & proxied to corresponding microservice (`analytics`, `notification`, etc.)

---

## Deploying to Vercel

### Option 1: Via Vercel Dashboard (Recommended for Monorepos)
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
2. Import the `Enterprise-AI-knowledgebase` repository.
3. In **Project Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: Click *Edit* and select `microservices/api-gateway`.
4. In **Environment Variables**, add the variables listed in `.env.example`:
   - `AUTH_SERVICE_URL`
   - `ANALYTICS_SERVICE_URL`
   - `NOTIFICATION_SERVICE_URL`
   - `FRONTEND_URL` (e.g. `https://your-frontend.vercel.app`)
   - `MONGO_URI`
   - `REDIS_URL`
   - `ACCESS_TOKEN_SECRET`
   - `REFRESH_TOKEN_SECRET`
   - `NODE_ENV` = `production`
5. Click **Deploy**.

### Option 2: Via Vercel CLI
From your terminal:
```bash
cd microservices/api-gateway
npx vercel
```
Follow the interactive prompts:
- Set up and deploy: **y**
- Link to existing project: **n** (or link to your existing project)
- Project name: `enterprise-ai-gateway`
- Located in: `./`
- Want to modify settings: **n**

Then configure production environment variables:
```bash
npx vercel env add MONGO_URI production
npx vercel env add REDIS_URL production
# (repeat for remaining environment variables)
npx vercel --prod
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
   curl http://localhost:5001/health
   ```