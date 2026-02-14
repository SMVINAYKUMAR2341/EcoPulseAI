# 🚀 Deployment Guide

Since this is a full-stack app (React Frontend + Node.js Backend), you need to deploy them as two separate services.

## 1️⃣ Deploy Backend (API) via Render
**Render** has a generous free tier for Node.js services.

1.  Go to [dashboard.render.com](https://dashboard.render.com/) and click **New + -> Web Service**.
2.  Connect your GitHub repository: `SMVINAYKUMAR2341/EcoPulseAI`.
3.  **Configuration:**
    *   **Root Directory:** `server` (Important!)
    *   **Runtime:** Node
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server.js`
4.  **Environment Variables:**
    *   Click "Advanced" or "Environment Variables".
    *   Add `API_KEY`: Your Gemini API Key.
    *   Add `PORT`: `3001` (Optional, Render sets this automatically usually, but good to have).
5.  Click **Create Web Service**.
6.  **Copy the URL** once deployed (e.g., `https://eco-scanner-api.onrender.com`). You need this for the frontend!

---

## 2️⃣ Deploy Frontend (App) via Vercel
**Vercel** is the best place for Vite/React apps.

1.  Go to [vercel.com/new](https://vercel.com/new).
2.  Import your GitHub repository: `SMVINAYKUMAR2341/EcoPulseAI`.
3.  **Configuration:**
    *   **Root Directory:** Click "Edit" and select `app`.
    *   **Framework Preset:** Vite (Should auto-detect).
4.  **Environment Variables:**
    *   Add `VITE_API_URL`: The Backend URL from Step 1 **plus** `/api`.
    *   *Example:* `https://eco-scanner-api.onrender.com/api`
5.  Click **Deploy**.

---

### 🎉 Done!
Your app will be live at the Vercel URL!
