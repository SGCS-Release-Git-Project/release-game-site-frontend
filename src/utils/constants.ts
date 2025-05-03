import { Game } from '../types';

export const GAMES: Game[] = [
  {
    id: 'trash-flight',
    title: 'Trash Flight',
    description: '이 흥미진진한 아케이드 게임에서 우주를 탐험하며 쓰레기를 수집하고 장애물을 피하세요!',
    thumbnail: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: 'https://yjs2673.github.io/Trash-Flight',
    featured: true,
    tags: ['아케이드', '우주', '액션'],
    releaseDate: '2024'
  },
  {
    id: 'pixel-adventure',
    title: '픽셀 어드벤처',
    description: '이 모험 게임에서 다채로운 픽셀 세계를 탐험하고 도전적인 퍼즐을 해결하세요.',
    thumbnail: 'https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#coming-soon',
    tags: ['모험', '퍼즐'],
    releaseDate: '출시 예정'
  },
  {
    id: 'code-runner',
    title: '코드 러너',
    description: '시간 제한 안에 프로그래밍 과제를 해결하는 빠른 템포의 게임에서 당신의 코딩 실력을 시험해보세요.',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#coming-soon',
    tags: ['교육', '퍼즐', '코딩'],
    releaseDate: '출시 예정'
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