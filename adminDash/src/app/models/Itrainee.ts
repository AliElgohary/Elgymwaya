export interface Itrainee {
  _id: string;
  full_name: string;
  email: string;
  phone_number: string;
  birth_date: Date;
  age: number;
  role: string;
  profile_picture: string;
  height: number;
  weight: number;
  __v: number;
  plan_id: string;
  subscription_date: Date;
  subscription_end_date: Date;
  subscription_months: number;
  coach_id: {
    _id: string;
    full_name: string;
  };
  newPlanProfilePicture?: File;
}
