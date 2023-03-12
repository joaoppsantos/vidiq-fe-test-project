import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_SORT_CATEGORY,
  DEFAULT_SORT_ORDER,
} from './constants';
import { QueryOptions, GetKeywordsProps } from './types';

let cachedResponse: {
  [key: string]: GetKeywordsProps;
} = {};

export const getKeywords = async (
  options?: QueryOptions
): Promise<GetKeywordsProps> => {
  const key = JSON.stringify(options);

  if (cachedResponse[key]) {
    return cachedResponse[key];
  }

  const url = `http://localhost:3004/keywords?_page=${
    options?.page ?? 1
  }&_limit=${options?.limit ?? DEFAULT_PAGE_LIMIT}&_sort=${
    options?.sort ?? DEFAULT_SORT_ORDER
  }&_order=${options?.order ?? DEFAULT_SORT_CATEGORY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const data = await response.json();
    throw new Error(`oops, something went wrong: ${data.status_message}`);
  }

  const data = await response.json();
  const total_count = parseInt(response.headers.get('X-Total-Count') ?? '0');

  cachedResponse[key] = { data, total_count };

  return { data, total_count };
};
