import { ArticleSchema } from '@api/types';

export function formatDateAsDDYYMM(date: string): string {
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day}/${month}/${year}`;
}

export function sortArticlesByDate(articles: ArticleSchema[]): ArticleSchema[] {
  return articles.sort(({ updatedAt: dateA }, { updatedAt: dateB }) => {
    const a = new Date(dateA);
    const b = new Date(dateB);
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
}
