import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import GameEmbed from '../components/GameEmbed';
import GameCard from '../components/GameCard';
import { GAMES } from '../utils/constants';

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const game = useMemo(() => 
    GAMES.find(g => g.id === id) || GAMES[0], 
    [id]
  );
  
  // Get related games (excluding the current one)
  const relatedGames = useMemo(() => 
    GAMES.filter(g => g.id !== game.id)
      .slice(0, 3), 
    [game.id]
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        
        {/* Game title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {game.title}
        </h1>
        
        {/* Game metadata */}
        <div className="flex flex-wrap gap-4 mb-8">
          {game.releaseDate && (
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{game.releaseDate}</span>
            </div>
          )}
          
          {game.tags && game.tags.map(tag => (
            <div key={tag} className="flex items-center text-gray-400">
              <Tag className="w-4 h-4 mr-2" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
        
        {/* Game description */}
        <p className="text-gray-300 text-lg mb-8 max-w-3xl">
          {game.description}
        </p>
        
        {/* Game embed */}
        <div className="mb-12">
          <GameEmbed gameUrl={game.url} title={game.title} />
        </div>
        
        {/* Direct link */}
        {!game.url.startsWith('#') && (
          <div className="mb-12 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-300 mb-3">
              Having trouble with the embedded game? Try opening it directly:
            </p>
            <a 
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Open {game.title} in a new tab
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        )}
        
        {/* Related games */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            More Games You Might Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;