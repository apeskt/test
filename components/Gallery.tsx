
import React from 'react';

const galleryImages = [
    { src: 'https://picsum.photos/seed/friend1/500/400', alt: 'A beautiful landscape' },
    { src: 'https://picsum.photos/seed/friend2/500/600', alt: 'Laughing together' },
    { src: 'https://picsum.photos/seed/friend3/500/500', alt: 'Enjoying coffee' },
    { src: 'https://picsum.photos/seed/friend4/500/700', alt: 'A celebratory moment' },
    { src: 'https://picsum.photos/seed/friend5/500/450', alt: 'Working on a project' },
    { src: 'https://picsum.photos/seed/friend6/500/550', alt: 'A scenic view' },
];

export const Gallery: React.FC = () => {
    return (
        <section className="mb-20">
            <h2 className="text-4xl font-jua text-center text-rose-800 mb-10">함께한 추억들</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
