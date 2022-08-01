import { POSTEDITMODAL, POSTEDITMODALEMPTY } from "../actions/types";

const initialState = {
    post:true,
  postEditData: null,
};

export const postEditModalPreData = (state = initialState, action) => {
  switch (action.type) {
    case POSTEDITMODAL:
        console.log(action.payload);
      return {
        ...state,
        postEditData: action.payload,
      };

    case POSTEDITMODALEMPTY:
      return {
        ...state,
        post:false,
        postEditData: action.payload,
      };
    default:
      return state;
  }
};
