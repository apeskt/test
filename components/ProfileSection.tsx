
import React from 'react';
import { Profile } from '../types';

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 text-center flex flex-col items-center transform hover:-translate-y-2">
        <img
            src={profile.imageUrl}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-rose-200"
        />
        <h3 className="text-3xl font-jua text-rose-600 mb-2">{profile.name}</h3>
        <p className="text-gray-500">{profile.description}</p>
    </div>
);

export const ProfileSection: React.FC = () => {
    const profiles: Profile[] = [
        {
            name: '김경림',
            imageUrl: 'https://picsum.photos/seed/gyeongrim/200/200',
            description: '긍정 에너지와 따뜻한 마음의 소유자. 세정이의 든든한 동료이자 친구.',
        },
        {
            name: '이세정',
            imageUrl: 'https://picsum.photos/seed/sejeong/200/200',
            description: '세심함과 밝은 미소로 주변을 밝히는 사람. 경림이와 함께 성장하는 중.',
        },
    ];

    return (
        <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-10">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.name} profile={profile} />
                ))}
            </div>
        </section>
    );
};
