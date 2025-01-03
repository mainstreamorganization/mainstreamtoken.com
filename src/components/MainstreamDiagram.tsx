import React from 'react';

const MainstreamDiagram = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 60">
            <defs>
                <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#ffd584', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#ffc85c', stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#1e293b', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#334155', stopOpacity:1}} />
                </linearGradient>
                
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
                </filter>
            </defs>

            <g transform="translate(120,30)">
                <path d="M-35 -5 
                        C-35 -15 -25 -20 -15 -18
                        C-10 -22 0 -22 5 -18
                        C10 -22 20 -22 25 -18
                        C30 -20 35 -15 35 -5
                        C35 0 33 5 30 8
                        C33 12 35 18 30 22
                        C25 25 15 25 10 22
                        C5 25 -5 25 -10 22
                        C-15 25 -25 25 -30 22
                        C-35 18 -33 12 -30 8
                        C-33 5 -35 0 -35 -5Z" 
                    fill="url(#brainGradient)"/>

                <g stroke="#e6b34d" strokeWidth="1" fill="none" opacity="0.7">
                <path d="M0 -18 C0 -15 0 -10 0 15"/>
                <path d="M-25 -10 C-20 -8 -15 -8 -10 -10"/>
                <path d="M25 -10 C20 -8 15 -8 10 -10"/>
                <path d="M-25 5 C-20 7 -15 7 -10 5"/>
                <path d="M25 5 C20 7 15 7 10 5"/>
                <path d="M-30 10 C-25 15 -20 15 -15 10"/>
                <path d="M30 10 C25 15 20 15 15 10"/>
                </g>

                <g fill="#fff5cc">
                <circle cx="-20" cy="-10" r="1">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="20" cy="-10" r="1">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="0" cy="0" r="1">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="1s" repeatCount="indefinite"/>
                </circle>
                </g>
            </g>

            <g transform="translate(360,30)">
                <rect x="-40" y="-20" width="80" height="40" rx="2" fill="url(#chipGradient)"/>
                
                <g fill="#475569">
                <rect x="-38" y="-18" width="4" height="2"/>
                <rect x="-38" y="-12" width="4" height="2"/>
                <rect x="-38" y="-6" width="4" height="2"/>
                <rect x="-38" y="4" width="4" height="2"/>
                <rect x="-38" y="10" width="4" height="2"/>
                <rect x="-38" y="16" width="4" height="2"/>
                
                <rect x="34" y="-18" width="4" height="2"/>
                <rect x="34" y="-12" width="4" height="2"/>
                <rect x="34" y="-6" width="4" height="2"/>
                <rect x="34" y="4" width="4" height="2"/>
                <rect x="34" y="10" width="4" height="2"/>
                <rect x="34" y="16" width="4" height="2"/>
                </g>

                <g stroke="#64748b" strokeWidth="0.75" opacity="0.8">
                <line x1="-35" y1="-15" x2="35" y2="-15"/>
                <line x1="-35" y1="0" x2="35" y2="0"/>
                <line x1="-35" y1="15" x2="35" y2="15"/>
                <line x1="-25" y1="-20" x2="-25" y2="20"/>
                <line x1="0" y1="-20" x2="0" y2="20"/>
                <line x1="25" y1="-20" x2="25" y2="20"/>
                </g>

                <g fill="#38bdf8">
                <circle cx="-25" cy="-15" r="1.5">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="0" cy="0" r="1.5">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1s" begin="0.33s" repeatCount="indefinite"/>
                </circle>
                <circle cx="25" cy="15" r="1.5">
                    <animate attributeName="opacity" values="1;0.2;1" dur="1s" begin="0.66s" repeatCount="indefinite"/>
                </circle>
                </g>
            </g>

            <g>
                <path d="M160 20 C200 20 280 20 320 20" fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.8">
                <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
                </path>
                <path d="M160 24 C200 24 280 24 320 24" fill="none" stroke="#ff9100" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.8">
                <animate attributeName="stroke-dashoffset" values="8;0" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
                </path>
                <path d="M160 28 C200 28 280 28 320 28" fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.8">
                <animate attributeName="stroke-dashoffset" values="8;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
                </path>

                <path d="M160 32 C200 32 280 32 320 32" fill="none" stroke="#ff9100" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.8">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" begin="0.1s" repeatCount="indefinite"/>
                </path>
                <path d="M160 36 C200 36 280 36 320 36" fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.8">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="1.3s" begin="0.3s" repeatCount="indefinite"/>
                </path>
                <path d="M160 40 C200 40 280 40 320 40" fill="none" stroke="#ff9100" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.8">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="1.1s" begin="0.5s" repeatCount="indefinite"/>
                </path>

                <g filter="url(#glow)">
                <circle cx="200" cy="24" r="1.5" fill="#ff6b00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="cx" values="160;320" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="240" cy="28" r="1.5" fill="#ff9100">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.3s" repeatCount="indefinite"/>
                    <animate attributeName="cx" values="160;320" dur="2.2s" begin="0.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="280" cy="36" r="1.5" fill="#ff6b00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.6s" repeatCount="indefinite"/>
                    <animate attributeName="cx" values="320;160" dur="2.4s" begin="0.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="240" cy="40" r="1.5" fill="#ff9100">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.9s" repeatCount="indefinite"/>
                    <animate attributeName="cx" values="320;160" dur="2.1s" begin="0.9s" repeatCount="indefinite"/>
                </circle>
                </g>
            </g>
        </svg>
    );
};

export default MainstreamDiagram;
