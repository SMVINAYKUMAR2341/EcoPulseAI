# 🚀 Deployment Guide

You can now deploy the entire application (Frontend + Backend) to Vercel in one go!

## ⚡ Option 1: Vercel Single-Repo Deployment (Recommended)
This deploys both the React Frontend and the Serverless Backend from this repository.

1.  **Go to Vercel**: [vercel.com/new](https://vercel.com/new).
2.  **Import Repository**: `SMVINAYKUMAR2341/EcoPulseAI`.
3.  **Configure Project**:
    *   **Root Directory:** LEAVE EMPTY (Project Root).
    *   **Build Command:** `cd app && npm install && npm run build` (Should auto-detect from `vercel.json`).
    *   **Output Directory:** `app/dist` (Should auto-detect).
4.  **Environment Variables**:
    *   Add `API_KEY`: Your Gemini API Key.
    *   Add `VITE_API_URL`: `/api` (Important! This points to the serverless functions).
5.  Click **Deploy**.

---

## 🛠️ Option 2: Split Deployment (Render + Vercel)
If you prefer keeping backend separate (e.g., for long-running tasks or more control):

### Backend (Render)
1.  **Root Directory:** `server`.
2.  **Env Vars:** `API_KEY`.
3.  **Start Command:** `node server.js`.

### Frontend (Vercel)
1.  **Root Directory:** `app`.
2.  **Env Vars:** `VITE_API_URL` -> Your Render URL + `/api`.
