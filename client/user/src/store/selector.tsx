import { userType } from "../types";

export const accessTokenSelector = (state: any) => state.auth.token;

export const userSelector = (state: {
  auth: { user: userType; accessToken: string };
}) => state.auth.user;
