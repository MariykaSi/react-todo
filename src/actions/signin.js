import { SIGNIN, SIGNOUT } from "../constants/actions/signin";

export const signIn = () => ({
  type: SIGNIN
});

export const signOut = () => ({
  type: SIGNOUT
});
