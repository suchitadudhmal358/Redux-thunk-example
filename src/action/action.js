import axios from "axios";
import FetchUserService from "../services/FetchUserService";
import { DISPLAY_USERS } from "./action.types";

export const displayUsers = () => {
  return async (dispatch) => {
    const { data } = await FetchUserService.get("users");
    console.log(data);
    dispatch({
      type: DISPLAY_USERS,
      payload: data,
    });
  };
};
