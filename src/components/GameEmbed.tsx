import React, { useState, useEffect } from 'react';
import { Gamepad, RefreshCw } from 'lucide-react';

interface GameEmbedProps {
  gameUrl: string;
  title: string;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ gameUrl, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate load completion (in a real app, we'd detect actual iframe load)
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setError(false);
    
    // Simulate refresh behavior
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  if (gameUrl.startsWith('#')) {
    return (
      <div className="w-full h-[70vh] bg-gray-900 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <Gamepad className="w-16 h-16 mx-auto text-gray-600 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
          <p className="text-gray-400">This game is currently in development. Check back later!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden relative">
      {/* Game container with aspect ratio */}
      <div className="w-full bg-gray-900 rounded-lg overflow-hidden relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="text-center">
              <div className="loading-spinner mb-4">
                <div className="spinner"></div>
              </div>
              <p className="text-gray-300">Loading game...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="text-center p-8">
              <div className="mb-4 text-red-500">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Failed to load game</h3>
              <p className="text-gray-400 mb-4">There was an error loading the game. Please try again.</p>
              <button 
                onClick={handleRefresh}
                className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-md text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry
              </button>
            </div>
          </div>
        )}

        <div className="aspect-[16/9]">
          <iframe
            src={gameUrl}
            title={title}
            className="w-full h-full border-0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={() => setError(true)}
          ></iframe>
        </div>
      </div>

      {/* Controls bar */}
      <div className="mt-2 p-2 bg-gray-800 rounded-lg flex justify-between items-center">
        <span className="text-gray-300 font-medium">{title}</span>
        <button 
          onClick={handleRefresh} 
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Refresh game"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GameEmbed;