interface BaseApiResponse {
  statusCode: number;
  status: string;
}

export type ArticleSchema = {
  id: string;
  author: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export interface GetArticlesApiResponse extends BaseApiResponse {
  data: ArticleSchema[];
}

export interface PostArticlesApiResponse extends BaseApiResponse {
  data: ArticleSchema;
}

export type ArticlePostDataSchema = {
  author: string;
  title: string;
  content: string;
};
