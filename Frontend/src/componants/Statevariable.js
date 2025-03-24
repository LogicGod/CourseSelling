import { atom } from "recoil";
export const Signupatom = atom(
  {
    key: "Signup",
    default: false
  }
);
export const SignInatom = atom(
  {
    key: "SignIn",
    default: false
  }
);
export const userLoginStatevar = atom(
  {
    key: "userLogin",
    default: true
  }
);
export const Theme = atom(
  {
    key: "Theme",
    default: 'light'
  }
);

