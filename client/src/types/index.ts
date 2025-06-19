export interface Event {
   _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image?: string;
  createdBy: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}