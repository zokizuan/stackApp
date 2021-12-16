import { ISearch } from "../search.response.model";

export interface ISearchresult_state {
  searchResults: ISearch[] ;
  total_record: number;
  searchKey: string | undefined ;
  pagesize: number;
  pageno: number;
}
/* export interface Record {
  search_items: ISearch[];
} */