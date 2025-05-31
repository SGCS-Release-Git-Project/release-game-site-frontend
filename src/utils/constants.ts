import { Game } from '../types';

export const GAMES: Game[] = [
  {
    id: 'sogang-arcade',
    title: 'Sogang Arcade',
    description: '넥슨 크레이지 아케이드를 재해석한 Sogang Arcade. Unity 2022.3 ver',
    thumbnail: '/images/sogang-arcade.png',
    url: 'https://yjs2673.github.io/Games-Web/Sogang-Arcade/index.html',
    featured: true,
    tags: ['2D', '아케이드', '액션'],
    releaseDate: '2025.05.31'
  },
  {
    id: 'shooting-flight',
    title: 'Shooting Flight',
    description: '2D 종스크롤 슈팅 장르의 Shooting Flight. Unity 2022.3 ver',
    thumbnail: '/images/shooting-flight.png',
    url: 'https://yjs2673.github.io/Games-Web/Shooting-Flight/index.html',
    featured: true,
    tags: ['2D', '아케이드', '종스크롤'],
    releaseDate: '2025.05.31'
  },
  {
    id: 'undead-survivor',
    title: 'Undead Survivor',
    description: '시간 제한 안에 몬스터를 무찌르며 생존하는 Undead Survivor. Unity 2022.3 ver',
    thumbnail: '/images/undead-survivor.png',
    url: 'https://yjs2673.github.io/Games-Web/Undead-Survivor/index.html',
    featured: true,
    tags: ['2D', '아케이트', '액션'],
    releaseDate: '2025.05.31'
  },
  {
    id: 'sogang-defense',
    title: '서강 디펜스',
    description: '이 타워 디펜스 게임에서 서강대학교 캠퍼스를 과제와 시험으로부터 지켜내세요!',
    thumbnail: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#coming-soon',
    tags: ['전략', '타워 디펜스'],
    releaseDate: '출시 예정'
  },
  {
    id: 'math-quest',
    title: '수학 퀘스트',
    description: '수학적 사고력을 키우는 퍼즐 게임! 다양한 수학 문제를 해결하며 모험을 떠나보세요.',
    thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#coming-soon',
    tags: ['교육', '퍼즐', '수학'],
    releaseDate: '출시 예정'
  },
  {
    id: 'rhythm-master',
    title: '리듬 마스터',
    description: '음악의 비트에 맞춰 키를 누르는 리듬 게임! K-POP부터 클래식까지 다양한 장르의 음악을 즐겨보세요.',
    thumbnail: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#coming-soon',
    tags: ['음악', '리듬', '아케이드'],
    releaseDate: '출시 예정'
  }
];

export const SGCS_INFO = {
  name: 'SGCS Release - 서강대학교 컴퓨터공학과 학술동아리',
  description: 'SGCS Release는 서강대학교의 컴퓨터 과학과 학술 동아리입니다. 우리는 재미있고 매력적인 게임을 만들면서 프로그래밍 실력을 향상시키는 흥미로운 프로젝트를 진행합니다.',
  founded: '20xx',
  website: 'https://yjs2673.github.io/Trash-Flight',
  social: {
    github: 'https://github.com/SGCS-Release-Git-Project',
  }
};