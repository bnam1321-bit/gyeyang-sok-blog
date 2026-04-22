import React from 'react';

interface TypographicCoverProps {
    title: string;
    tags?: string[];
    slug: string; // Used for consistent gradient generation
    className?: string;
    showTags?: boolean;
}

export default function TypographicCover({
    title,
    tags,
    slug,
    className = '',
    showTags = true,
}: TypographicCoverProps) {
    // 1. Deterministic Gradient Generation based on slug
    const getGradient = (id: string) => {
        const gradients = [
            'from-[#1a2a5e] to-[#2c3e75]',   // Deep Navy
            'from-[#26b6b3] to-[#1e8e8c]',   // Medical Teal
            'from-[#3a6abf] to-[#2a54a4]',   // Mid Blue
            'from-[#1e293b] to-[#334155]',   // Slate Professional
            'from-[#0f172a] to-[#1e293b]',   // Midnight
            'from-[#2a54a4] to-[#26b6b3]',   // Navy to Teal Mix
            'from-[#475569] to-[#1e293b]',   // Cool Gray
            'from-[#0d3b5e] to-[#1a5276]',   // Deep Ocean
        ];

        // Check if slug is defined and is a string
        if (!id || typeof id !== 'string') {
            return gradients[0];
        }

        // Simple hash function
        let hash = 0;
        for (let i = 0; i < id.length; i++) {
            hash = id.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % gradients.length;
        return gradients[index];
    };

    const gradientClass = getGradient(slug);

    // 2. Main Title Processing (Add line breaks for long titles if needed, but CSS handles standard wrapping)
    // Extract main keyword for background effect? 
    // Let's use a subtle pattern overlay.

    return (
        <div
            className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${gradientClass} ${className}`}
        >
            {/* Background Pattern (Subtle Medical Crosses or Dots) */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 2px, transparent 2px)`,
                    backgroundSize: '24px 24px'
                }}
            ></div>

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">

                {/* Top: Category Tag */}
                <div className="flex items-start justify-between">
                    {showTags && tags && tags.length > 0 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-sm">
                            {tags[0]}
                        </span>
                    )}
                    {/* Decorative Icon */}
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-lg">✨</span>
                    </div>
                </div>

                {/* Center: Main Title */}
                <div className="mt-auto mb-auto">
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md break-keep line-clamp-3">
                        {title}
                    </h2>
                </div>

                {/* Bottom: Decoration Line */}
                <div className="mt-4 w-12 h-1 bg-white/50 rounded-full"></div>
            </div>
        </div>
    );
}
