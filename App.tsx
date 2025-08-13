
import React from 'react';
import { Hero } from './components/Hero';
import { ProfileSection } from './components/ProfileSection';
import { Gallery } from './components/Gallery';
import { KOSHAStory } from './components/KOSHAStory';
import { FriendshipAI } from './components/FriendshipAI';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen text-gray-800">
            <main className="container mx-auto px-4 py-8 md:py-12">
                <Hero />
                <ProfileSection />
                <Gallery />
                <KOSHAStory />
                <FriendshipAI />
            </main>
            <Footer />
        </div>
    );
};

export default App;
