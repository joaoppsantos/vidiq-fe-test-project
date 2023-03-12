import { GetTrendingKeywordsProps } from './types';

export async function getTrendingKeywords(
  options?: GetTrendingKeywordsProps
): Promise<{ data: number[] }> {
  const url = `http://localhost:3004/trending-keywords`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`oops, something went wrong: ${data.status_message}`);
  }

  return {
    data,
    ...Object.entries(options?.headers ?? {}).reduce(
      (accHeadersValues, current) => ({
        ...accHeadersValues,
        [current[0]]: response.headers.get(current[1]),
      }),
      {}
    ),
  };
}
