export type ArticleSchema = {
  id: string;
  author: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type ArticleApiResponse = {
  statusCode: number;
  status: string;
  data: ArticleSchema[]
}
