
import React from 'react';
import { HeartIcon } from './Icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-rose-800 text-rose-100 py-6 text-center">
            <div className="flex justify-center items-center gap-2">
                <p>Made with</p>
                <HeartIcon className="w-5 h-5 text-pink-400" />
                <p>for Gyeongrim & Sejeong's Friendship</p>
            </div>
        </footer>
    );
};
