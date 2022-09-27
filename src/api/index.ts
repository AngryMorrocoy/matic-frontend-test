import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  GetArticlesApiResponse,
  ArticlePostDataSchema,
  PostArticlesApiResponse,
  DeleteArticleApiResponse,
} from './types';

const baseURL = 'https://www.api.recruitment.matic.io';

function getApi(): [AxiosInstance, AbortController] {
  const controller = new AbortController();
  const api = axios.create({ baseURL, signal: controller.signal });

  return [api, controller];
}

export function getArticles(): [
  Promise<AxiosResponse<GetArticlesApiResponse>>,
  AbortController
] {
  const [api, apiController] = getApi();

  return [api.get('articles'), apiController];
}

export function createArticle({
  author,
  title,
  content,
}: ArticlePostDataSchema): [
  Promise<AxiosResponse<PostArticlesApiResponse>>,
  AbortController
] {
  const [api, apiController] = getApi();

  return [
    api.post('/articles', {
      author,
      title,
      content,
    }),
    apiController,
  ];
}

export function deleteArticle(
  articleId: string
): [Promise<AxiosResponse<DeleteArticleApiResponse>>, AbortController] {
  const [api, apiController] = getApi();

  return [api.delete(`/articles/${articleId}`), apiController];
}

export function editArticle(
  articleId: string,
  newArticle: ArticlePostDataSchema
): [Promise<AxiosResponse<DeleteArticleApiResponse>>, AbortController] {
  const [api, apiController] = getApi();

  return [api.patch(`/articles/${articleId}`, newArticle), apiController];
}
