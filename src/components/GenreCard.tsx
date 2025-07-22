import React from 'react';

interface GenreCardProps {
  genre: string;
  color: string;
  onClick?: () => void;
}

export const GenreCard: React.FC<GenreCardProps> = ({ genre, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-lg p-6 cursor-pointer
        transform transition-all duration-300 hover:scale-105
        shadow-lg hover:shadow-xl
        ${color}
      `}
      style={{ minHeight: '120px' }}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white drop-shadow-lg">{genre}</h3>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute -top-1 -left-1 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
    </div>
  );
};