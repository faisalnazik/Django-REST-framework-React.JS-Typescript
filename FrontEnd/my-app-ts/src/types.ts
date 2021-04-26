import { Theme } from "@material-ui/core";

export type Id = number;

export type PriorityValue = "H" | "M" | "L";

export interface Priority {
  value: PriorityValue;
  label: "High" | "Medium" | "Low";
}

export interface User {
  id: number;
  username: string;
  photo_url: string | null;
}

export interface UserDetail {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
  avatar: Avatar | null;
  date_joined: string;
  is_guest: boolean;
}

export interface TaskComment {
  id: number;
  task: number;
  author: number;
  text: string;
  created: string;
  modified: string;
}
export interface Avatar {
  id: number;
  photo: string;
  name: string;
}

export interface WithTheme {
  theme: Theme;
}

export interface AuthSetup {
  ALLOW_GUEST_ACCESS: boolean;
}

export type Status = "idle" | "loading" | "succeeded" | "failed";
