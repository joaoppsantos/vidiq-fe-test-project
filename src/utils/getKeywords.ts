import { QueryOptions, Keyword } from './types';

export async function getKeywords(
  options?: QueryOptions
): Promise<{ data: Keyword[]; total_count: number }> {
  const url = `http://localhost:3004/keywords?_page=${
    options?.page ?? 1
  }&_limit=${options?.limit ?? 30}&_sort=${options?.sort ?? 'asc'}&_order=${
    options?.order ?? 'keyword'
  }`;

  const response = await fetch(url);

  if (!response.ok) {
    const data = await response.json();
    throw new Error(`${data.status_message} (error code: ${data.status_code})`);
  }

  const data = await response.json();
  const total_count = parseInt(response.headers.get('X-Total-Count') ?? '0');

  return { data, total_count };
}
