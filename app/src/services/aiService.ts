
import type { AnalysisResult } from "@/types";

// Backend API URL
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

// Full analysis result including chart data
export interface FullAIResponse extends AnalysisResult {
  radarData: { subject: string; A: number; fullMark: number }[];
  barChartData: { name: string; value: number; color: string }[];
  highlights: { type: 'positive' | 'warning' | 'negative'; icon: string; text: string }[];
  funFact: string;
}

export const analyzeProductFromImage = async (imageBase64: string): Promise<FullAIResponse | null> => {
  try {
    console.log('📸 Sending image to backend for analysis...');

    const response = await fetch(`${API_BASE}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: imageBase64 }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || `Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Backend returned:', data.product?.name);
    return data as FullAIResponse;
  } catch (error) {
    console.error("Error analyzing product:", error);
    return null;
  }
};

export const analyzeProductFromBarcode = async (barcode: string): Promise<FullAIResponse | null> => {
  try {
    console.log('🔍 Sending barcode to backend:', barcode);

    const response = await fetch(`${API_BASE}/analyze-barcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ barcode }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || `Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Barcode result:', data.product?.name);
    return data as FullAIResponse;
  } catch (error) {
    console.error("Error looking up barcode:", error);
    return null;
  }
};

// Backward-compatible exports
export const identifyProductFromImage = analyzeProductFromImage;
export const lookupBarcode = analyzeProductFromBarcode;
