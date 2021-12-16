export interface IStackAPI_resp {
  items:     ISearch[];
  page:      number;
  page_size: number;
  total:     number;
}


export interface ISearch {
  tags:                string[];
  owner:               IOwner;
  is_answered:         boolean;
  view_count:          number;
  accepted_answer_id?: number;
  answer_count:        number;
  score:               number;
  last_activity_date:  number;
  creation_date:       number;
  question_id:         number;
  link:                string;
  title:               string;
  body:                string;
  last_edit_date?:     number;
}

export interface IOwner {
  account_id:    number;
  reputation:    number;
  user_id:       number;
  user_type:     string;
  profile_image: string;
  display_name:  string;
  link:          string;
}
