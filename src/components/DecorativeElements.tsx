import React from 'react';

export function FloralPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
    </div>
  );
}