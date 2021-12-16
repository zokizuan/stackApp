import { IOwner } from "../search.response.model";

/**
 * @property tags - array of tags
 * @property owner - owner of the question
 * @property is_answered - is the question answered
 * @property view_count - number of views
 * @property accepted_answer_id - id of the accepted answer
 */
export interface SearchViewModel {
  tags: string[];
  owner: IOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  creation_date: number;
  question_id: number;
  link: string;
  title: string;

  body_markdown: string;
}

