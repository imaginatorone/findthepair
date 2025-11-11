import Tile from './Tile';

const Board = ({ tiles, onTileClick }) => {
  return (
    <div className="grid grid-cols-4 gap-3 p-6 bg-white dark:bg-dark-card rounded-xl shadow-xl w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg border border-gray-200 dark:border-gray-700">
      {tiles.map(tile => (
        <Tile key={tile.id} tile={tile} onClick={() => onTileClick(tile.id)} />
      ))}
    </div>
  );
};

export default Board;