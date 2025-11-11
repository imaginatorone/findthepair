import { useState, useEffect } from 'react';
import Board from './components/Board';

function App() {
  const [tiles, setTiles] = useState([]);
  const [openTiles, setOpenTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Use Tailwind-supported color names only
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal'];

  const initTiles = () => {
    const shuffledColors = [...colors, ...colors].sort(() => Math.random() - 0.5);
    const initialTiles = shuffledColors.map((color, index) => ({
      id: index,
      color,
      isOpen: false,
      isMatched: false,
    }));
    setTiles(initialTiles);
    setOpenTiles([]);
    setMoves(0);
  };

  useEffect(() => {
    initTiles();
  }, []);

  const handleTileClick = (id) => {
    // prevent clicking more than 2, or same/matched tiles
    if (openTiles.length === 2) return;
    const tile = tiles.find(t => t.id === id);
    if (!tile || tile.isOpen || tile.isMatched) return;

    const newOpen = [...openTiles, id];
    setOpenTiles(newOpen);
    // open clicked tile
    setTiles(prev => prev.map(t => (t.id === id ? { ...t, isOpen: true } : t)));

    if (newOpen.length === 2) {
      setTimeout(() => {
        setTiles(prev => {
          const [aId, bId] = newOpen;
          const a = prev.find(t => t.id === aId);
          const b = prev.find(t => t.id === bId);
          const isMatch = a && b && a.color === b.color;
          return prev.map(t => {
            if (t.id === aId || t.id === bId) {
              if (isMatch) return { ...t, isMatched: true };
              return { ...t, isOpen: false };
            }
            return t;
          });
        });
        setOpenTiles([]);
        setMoves(m => m + 1);
      }, 600);
    }
  };

  const resetGame = () => {
    initTiles();
  };

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
  };

  const isGameWon = tiles.length === 16 && tiles.every(tile => tile.isMatched);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4">
      <button 
        onClick={toggleDark} 
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-dark-card rounded-full shadow-lg hover:shadow-xl transition-all z-10"
        aria-label="Переключить тёмную тему"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
      <header className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Найди пару!
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Ходы: {moves}</p>
      </header>
      {isGameWon && (
        <div className="text-green-500 text-lg font-semibold animate-bounce p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          Победа! 🎉 Все пары найдены!
        </div>
      )}
      <Board tiles={tiles} onTileClick={handleTileClick} />
      <button 
        onClick={resetGame} 
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        Новая игра
      </button>
    </div>
  );
}

export default App;
