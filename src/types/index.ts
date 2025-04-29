export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  featured?: boolean;
  tags?: string[];
  releaseDate?: string;
}