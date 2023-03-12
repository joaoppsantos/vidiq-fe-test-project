import { ReactNode, SyntheticEvent } from 'react';

export interface TableElementProps {
  children: number | string | JSX.Element;
  isMainColumn?: boolean;
  isHeader?: boolean;
}

export interface ColumnSortProps {
  text: string;
  sortByColumn: (sortCategory: string, order: string) => void;
}

export interface TableHeaderProps {
  sortByColumn: (sortCategory: string, order: string) => void;
  selectedColumn: string;
}

export interface TableContentProps {
  trendingKeywords: any;
  keywords: Keyword[];
  selectedColumn: string;
}

export interface TableProps {
  selectedColumn: string;
}

export interface TrendingKeywordProps {
  id: number;
  content: string;
  trendingKeywords: any;
}

export interface PaginationProps {
  pageLimit: number;
  count: number;
  onHandlePagination: (currentPage: number) => void;
  currentPage: number;
}

export interface LocalStorageProps {
  currentPage: number;
  sortCategory: string;
  order: string;
}

export interface SelectColumnMobileProps {
  onHandleChange: (event: SyntheticEvent) => void;
  selectedColumn: string;
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

export interface OverallScoreProps {
  score: number;
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
