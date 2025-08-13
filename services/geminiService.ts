
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    // In a real app, you'd want to handle this more gracefully.
    // For this example, we'll throw an error if the key is missing.
    console.warn("API_KEY environment variable not set. Using a mock response.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "mock_key" });

export const getFriendshipMessage = async (topic: string): Promise<string> => {
    // Mock response for environments without an API key
    if (!process.env.API_KEY || process.env.API_KEY === "mock_key") {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        return `"${topic}"에 대한 AI의 답변입니다:\n\n경림님과 세정님의 우정은 마치 맑은 날의 햇살 같아요! 함께라면 어떤 어려움도 즐거운 도전이 될 거예요. 오늘은 함께 맛있는 디저트를 먹으며 소소한 행복을 나눠보는 건 어떨까요? 두 분의 우정을 항상 응원합니다! ✨`;
    }

    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `너는 경림과 세정의 우정을 축하해주는 긍정적이고 따뜻한 AI야. 다음 주제에 대해 짧고 감동적인 메시지나 재미있는 활동을 한국어로 제안해줘. 주제: "${topic}"`,
            config: {
                temperature: 0.8,
                topP: 0.95,
            }
        });
        return result.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("AI 응답을 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
};
