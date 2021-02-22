import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";

export function signInUser(payload){
  return{
    type: SIGN_IN_USER,
    payload: payload
  }
}

export function signOutUser(payload){
  return{
    type: SIGN_OUT_USER,
    payload: payload
  }
}