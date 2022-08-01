import { POSTEDITMODAL, POSTEDITMODALEMPTY } from "./types";
import * as api from "../../api/index";

// Post Edit Data get in Modal
export const postEditModalPreData = (postId) => async (dispatch) => {
  try {
    const { data } = await api.fetchPostToEdit(postId);
    // console.log(data);
    if (data) {
      dispatch({
        type: POSTEDITMODAL,
        payload: data,
      });
    }
  } catch (error) {
    console.log("Error =>", error);
  }
};

// Post Edit Data Empty
export const postEditModalDataEmpty = () => {
  return { type: POSTEDITMODALEMPTY, payload: null };
};
