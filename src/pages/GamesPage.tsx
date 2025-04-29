import React from 'react';
import { Filter } from 'lucide-react';
import GameCard from '../components/GameCard';
import { GAMES } from '../utils/constants';

const GamesPage: React.FC = () => {
  // Find the featured game
  const featuredGame = GAMES.find(game => game.featured) || GAMES[0];
  
  // Other games (excluding the featured one for separate display)
  const otherGames = GAMES.filter(game => game.id !== featuredGame.id);

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          All Games
        </h1>
        
        <p className="text-gray-300 text-lg mb-10 max-w-3xl">
          Explore all the exciting games created by SGCS Release members. From action-packed adventures to mind-bending puzzles, there's something for everyone!
        </p>
        
        {/* Filter section */}
        <div className="flex items-center justify-between mb-10">
          <div className="text-gray-400">
            Showing {GAMES.length} games
          </div>
          
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-gray-300 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        
        {/* Featured game */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">
            Featured Game
          </h2>
          <GameCard game={featuredGame} featured={true} />
        </div>
        
        {/* All other games */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            All Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;