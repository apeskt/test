
import React from 'react';
import { HeartIcon } from './Icons';

export const Hero: React.FC = () => {
    return (
        <header className="text-center mb-16">
            <div className="inline-block bg-white p-4 rounded-full shadow-lg mb-4">
                <HeartIcon className="w-12 h-12 text-pink-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-jua text-rose-800 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                경림 & 세정
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600">우리의 반짝이는 우정 이야기</p>
        </header>
    );
};
