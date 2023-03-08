import { ReactNode } from 'react';

export interface TableElementProps {
  children: number | string | JSX.Element;
  isMainColumn?: boolean;
  isHeader?: boolean;
}

export interface ColumnSortProps {
  text: string;
}

export interface TableContentProps {
  trendingKeywords: any;
  selectedColumn?: string;
  keywords: Keyword[];
}

export interface TrendingKeywordProps {
  id: number;
  content: string;
  trendingKeywords: any;
}

export interface PaginationProps {
  pageLimit: number;
  count: number;
  onPaginate: (page: number) => void;
  currentPage: number;
}

export type HeaderColumnType = {
  [key: string]: ReactNode;
};

export type ColumnContentType = {
  [key: string | number | symbol]: (k: Keyword) => ReactNode;
};

export enum TableColumns {
  keyword = 'Keywords',
  competition = 'Competition',
  overall_score = 'Overall Score',
  search_volume = 'Search volume',
}

export interface GetTrendingKeywordsProps {
  headers: { total_count: 'X-Total-Count' };
}

export interface Keyword {
  id: number;
  keyword: string;
  search_volume: number;
  competition: string;
  overall_score: number;
}

export interface QueryOptions {
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
}
