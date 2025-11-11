import { memo, useMemo } from 'react';

const COLOR_MAP = {
  red: 'bg-red-400 dark:bg-red-600',
  blue: 'bg-blue-400 dark:bg-blue-600',
  green: 'bg-green-400 dark:bg-green-600',
  yellow: 'bg-yellow-400 dark:bg-yellow-600',
  purple: 'bg-purple-400 dark:bg-purple-600',
  orange: 'bg-orange-400 dark:bg-orange-600',
  pink: 'bg-pink-400 dark:bg-pink-600',
  teal: 'bg-teal-400 dark:bg-teal-600',
};

const Tile = memo(({ tile, onClick }) => {
  const isVisible = tile.isOpen || tile.isMatched;
  const initLetter = tile.color.charAt(0).toUpperCase();
  const bgClass = COLOR_MAP[tile.color] || 'bg-slate-400 dark:bg-slate-600';

  return (
    <div 
      className="tile-base tile-hover relative perspective-600"
      onClick={!isVisible ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && !isVisible && onClick()}
      aria-label={isVisible ? `Плитка: ${tile.color}` : 'Плитка: закрытая'}
    >
      <div className={`relative h-full w-full transform-style-preserve-3d transition-transform duration-500 ease-in-out ${isVisible ? 'rotate-y-180' : ''}`}>
        {/* Front (closed) */}
        <div 
          className="absolute inset-0 tile-closed rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 backface-hidden"
        >
          <span className="text-2xl">❓</span>
        </div>
        {/* Back (open) */}
        <div 
          className={`absolute inset-0 tile-open ${bgClass} rounded-lg flex items-center justify-center text-white font-bold backface-hidden rotate-y-180 ${tile.isMatched ? 'animate-pulse opacity-90 scale-105 shadow-lg shadow-green-500/30' : ''}`}
        >
          <span className="text-2xl">{initLetter}</span>
        </div>
      </div>
    </div>
  );
});

Tile.displayName = 'Tile';

export default Tile;
