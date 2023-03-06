import { ReactNode } from 'react';

export interface TableElementProps {
  children: string | JSX.Element;
}

export type HeaderColumnType = {
  [key: string]: ReactNode;
};

export enum TableColumns {
  keyword = 'Keywords',
  competition = 'Competition',
  overall_score = 'Overall Score',
  search_volume = 'Search volume',
}
