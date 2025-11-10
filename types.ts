export type AppStep = 'username' | 'survey' | 'results';

export interface ComparisonPair {
  item1: string;
  item2: string;
}

export interface ComparisonResult {
  pair: ComparisonPair;
  winner: string | null;
  value: number; // -9 to 9, 0 is equal, negative favors item1, positive favors item2
}

export interface ComparisonGroup {
  name: string;
  pairs: ComparisonPair[];
}

export type CriteriaData = {
  [key: string]: string[];
};
