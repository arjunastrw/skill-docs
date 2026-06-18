import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Models",
  description:
    "Compare 18 AI models: Claude, GPT, Gemini, Llama, DeepSeek, Mistral, and more. Pricing, context windows, benchmarks, and best use cases.",
  openGraph: {
    title: "AI Model Comparison — Agent Hub",
    description:
      "Side-by-side comparison of 18 AI models with pricing per 1M tokens, context windows, MMLU scores, and best use cases.",
  },
};

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
