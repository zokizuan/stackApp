import { ISearch } from "../search.response.model";

export interface ISearchresult_state {
  record: Record[] ;
  total_record: number;
  searchKey: string;
  pagesize: number;
  pageno: number;
}
export interface Record {
  // pageno: number;
  search_items: ISearch[];
}