import React from 'react';

export default function Logo({ size = 24, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="25" fill="currentColor"/>
      <path d="M50 25v50M25 42h50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="25" cy="42" r="7" fill="white"/>
      <circle cx="75" cy="42" r="7" fill="white"/>
      <path d="M25 42c0 12 10 22 25 22s25-10 25-22" stroke="white" strokeWidth="3" strokeDasharray="6 6" opacity="0.5"/>
      <circle cx="50" cy="68" r="4" fill="white" opacity="0.8"/>
    </svg>
  );
}
