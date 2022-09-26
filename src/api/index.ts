import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ArticleApiResponse } from './types';

const baseURL = 'https://www.api.recruitment.matic.io';

function getApi(): [AxiosInstance, AbortController] {
  const controller = new AbortController();
  const api = axios.create({ baseURL, signal: controller.signal });

  return [api, controller];
}

export function getArticles(): [
  Promise<AxiosResponse<ArticleApiResponse>>,
  AbortController
] {
  const [api, apiController] = getApi();

  return [api.get('articles'), apiController];
}
