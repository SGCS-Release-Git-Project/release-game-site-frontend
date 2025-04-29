import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, featured = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden group rounded-xl transition-all duration-300
        ${featured 
          ? 'md:col-span-2 aspect-video' 
          : 'aspect-[4/3]'
        }
        bg-gray-800 hover:shadow-xl hover:shadow-blue-900/20
        transform hover:-translate-y-1
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end z-10">
        {game.featured && (
          <span className="absolute top-4 right-4 bg-blue-600 text-xs uppercase tracking-wider py-1 px-2 rounded-full text-white font-medium">
            Featured
          </span>
        )}

        {/* Tags */}
        {game.tags && game.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {game.tags.map((tag) => (
              <span 
                key={tag} 
                className="flex items-center text-xs bg-gray-700/80 backdrop-blur-sm text-gray-300 px-2 py-1 rounded-full"
              >
                <Tag className="w-3 h-3 mr-1 text-blue-400" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {game.title}
        </h3>
        
        <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
          {game.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {game.releaseDate}
          </span>

          {game.url.startsWith('#') ? (
            <span className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-md text-sm">
              Coming Soon
            </span>
          ) : (
            <Link 
              to={`/game/${game.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
            >
              Play Now <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;