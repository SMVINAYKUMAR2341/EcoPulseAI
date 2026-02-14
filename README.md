# 🌿 EcoPulseAI

EcoPulseAI is an AI-powered sustainability scanner that helps users make environmentally conscious purchasing decisions. By scanning a product's barcode or uploading an image, the app provides a deep-dive analysis into its environmental impact, health score, and ethical transparency.

![Eco Scanner](https://raw.githubusercontent.com/SMVINAYKUMAR2341/EcoPulseAI/main/app/public/vite.svg) *Replace with a real banner/screenshot if available*

## 🚀 Key Features

- **Multimodal AI Scanning**: Identify products via camera or image upload using Gemini 2.0 Flash.
- **Sustainability Scoring**: Get a 0-100 score based on carbon footprint, water usage, and energy intensity.
- **Ingredient Analysis**: Deep dive into the environmental and health impacts of specific ingredients.
- **Personalized Dashboard**: Track your "Eco-Impact" and scan history.
- **Professional PDF Reports**: Generate and download detailed sustainability reports.
- **Smart Alternatives**: Suggestions for similar products with better eco-scores.
- **Disposal Guidance**: Clear instructions on how to recycle or dispose of packaging.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons, Recharts.
- **Backend**: Node.js, Express, Multer.
- **AI**: Google Gemini 2.0 Flash.
- **Deployment**: Optimized for Vercel (Frontend + Serverless Backend).

## 🏃 Getting Started

### Prerequisites
- Node.js (v18+)
- Google Gemini API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SMVINAYKUMAR2341/EcoPulseAI.git
   cd EcoPulseAI
   ```

2. **Setup Backend**:
   ```bash
   cd server
   npm install
   # Create a .env file and add your API_KEY
   # API_KEY=your_gemini_api_key_here
   node server.js
   ```

3. **Setup Frontend**:
   ```bash
   cd ../app
   npm install
   npm run dev
   ```

## 🌍 Deployment

### Deploy to Vercel (Recommended)
This project is configured for a single-repo deployment on Vercel.

1. Import the repository in Vercel.
2. Set **Root Directory** as the project root (empty).
3. Set **Environment Variables**:
   - `API_KEY`: Your Gemini API Key.
   - `VITE_API_URL`: `/api`
4. Deploy!

## 🔒 Security
Your API keys are protected. `.env` files are excluded from git, and sensitive logic is handled server-side to prevent exposure in the browser.

---
Built with ❤️ by the EcoPulse Team.
