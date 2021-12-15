import { ISearch } from "../search.response.model";


export interface ISearchresult_state {
  record: Record | null;
  total_record: number;
  searchKey: string;
}
export interface Record {
  start_pageno: number;
  end_pageno: number;
  search_items :ISearch[],    
}