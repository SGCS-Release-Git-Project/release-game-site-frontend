import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import GameCard from '../components/GameCard';
import AboutSection from '../components/AboutSection';
import { GAMES } from '../utils/constants';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Find the featured game
  const featuredGame = GAMES.find(game => game.featured) || GAMES[0];
  
  // Other games (excluding the featured one)
  const otherGames = GAMES.filter(game => game.id !== featuredGame.id);

  useEffect(() => {
    if (!isPaused && otherGames.length > 3) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 >= otherGames.length ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPaused, otherGames.length]);

  // Get visible games based on current index
  const visibleGames = otherGames.length > 3
    ? [
        ...otherGames.slice(currentIndex, currentIndex + 3),
        ...otherGames.slice(0, Math.max(0, 3 - (otherGames.length - currentIndex)))
      ]
    : otherGames;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection featuredGame={featuredGame} />
      
      {/* Featured Games Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              우리의 <span className="text-blue-500">게임들</span>
            </h2>
            <Link 
              to="/games" 
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              모든 게임 보기 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {visibleGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {otherGames.length > 3 && (
            <div className="flex justify-center mt-8 gap-2">
              {otherGames.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`슬라이드 ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Join Us Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            SGCS Release 게임 개발팀과 함께하세요
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            게임 개발에 관심이 있으신가요? <br></br>서강대학교의 재능있는 개발자들과 함께 여러분의 창의적인 아이디어를 게임으로 만들어보세요!
          </p>
          <a 
            href="https://github.com/sgcsrelease" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            동아리 가입 알아보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;