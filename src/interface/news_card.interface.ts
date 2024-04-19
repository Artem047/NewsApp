export interface INewsCard {
    description: string | null;
    title: string;
    urlToImage: string | undefined;
    author: string;
    publishedAt: string;
    url?: string | undefined;
    source: {
      id: string;
    }
  }