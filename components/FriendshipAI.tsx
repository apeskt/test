
import React, { useState } from 'react';
import { getFriendshipMessage } from '../services/geminiService';
import { SparklesIcon, LoadingIcon } from './Icons';

export const FriendshipAI: React.FC = () => {
    const [topic, setTopic] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic || isLoading) return;

        setIsLoading(true);
        setError(null);
        setResponse('');

        try {
            const message = await getFriendshipMessage(topic);
            setResponse(message);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'AI와 대화 중 오류가 발생했어요.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="mb-20 text-center">
            <h2 className="text-4xl font-jua text-rose-800 mb-4">우정 AI에게 물어봐!</h2>
            <p className="text-lg text-gray-600 mb-8">우리 우정에 대해 궁금한 점이나, 함께하고 싶은 활동을 AI에게 물어보세요.</p>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-2">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="예: 우리에게 어울리는 여행지는?"
                    className="flex-grow p-3 border-2 border-rose-200 rounded-full focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center justify-center disabled:bg-rose-300"
                    disabled={isLoading || !topic}
                >
                    {isLoading ? <LoadingIcon className="w-6 h-6" /> : <SparklesIcon className="w-6 h-6" />}
                    <span className="ml-2 hidden sm:inline">질문하기</span>
                </button>
            </form>

            {response && (
                <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg text-left">
                    <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
                </div>
            )}
            {error && (
                <div className="mt-8 max-w-2xl mx-auto bg-red-100 border border-red-400 text-red-700 p-4 rounded-xl">
                    <p>{error}</p>
                </div>
            )}
        </section>
    );
};
