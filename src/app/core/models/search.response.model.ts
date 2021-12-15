export interface Owner_resp {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface Search_resp {
  tags: string[];
  owner: Owner_resp;
  is_answered: boolean;
  view_count: number;
  closed_date: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  link: string;
  closed_reason: string;
  title: string;
}