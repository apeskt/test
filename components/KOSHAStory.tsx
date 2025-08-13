
import React from 'react';
import { BuildingIcon } from './Icons';

export const KOSHAStory: React.FC = () => {
    return (
        <section className="mb-20 bg-gradient-to-br from-white to-rose-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 bg-rose-500 p-5 rounded-full text-white shadow-lg">
                    <BuildingIcon className="w-16 h-16" />
                </div>
                <div>
                    <h2 className="text-4xl font-jua text-rose-800 mb-4">안전보건공단에서 피어난 우정</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        우리의 인연은 안전보건공단에서 시작되었어요. 함께 배우고, 서로에게 힘이 되어주며 매일 성장하고 있습니다. 
                        치열한 업무 속에서도 서로를 챙기는 마음이 지금의 우리를 만들었습니다. 
                        앞으로도 함께할 날들이 기대돼요!
                    </p>
                </div>
            </div>
        </section>
    );
};
