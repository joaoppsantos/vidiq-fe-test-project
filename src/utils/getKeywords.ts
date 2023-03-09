import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_SORT_CATEGORY,
  DEFAULT_SORT_ORDER,
} from './constants';
import { QueryOptions, Keyword } from './types';

export const getKeywords = async (
  options?: QueryOptions
): Promise<{ data: Keyword[]; total_count: number }> => {
  const url = `http://localhost:3004/keywords?_page=${
    options?.page ?? 1
  }&_limit=${options?.limit ?? DEFAULT_PAGE_LIMIT}&_sort=${
    options?.sort ?? DEFAULT_SORT_ORDER
  }&_order=${options?.order ?? DEFAULT_SORT_CATEGORY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const data = await response.json();
    throw new Error(`${data.status_message} (error code: ${data.status_code})`);
  }

  const data = await response.json();
  const total_count = parseInt(response.headers.get('X-Total-Count') ?? '0');

  return { data, total_count };
};
