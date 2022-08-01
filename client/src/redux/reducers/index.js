import { combineReducers } from "redux";
import { authUser } from "./authUser";
import { postEditModalPreData } from "./postEditModalPreData";
import { updateUserProfile } from "./updateUserProfile";
import { userFavoritePostsList } from "./userFavoritePostsList.js";

export default combineReducers({
  authUser: authUser,
  postEditModalPreData: postEditModalPreData,
  updateUserProfile: updateUserProfile,
  userFavoritePostsList: userFavoritePostsList,
});
