import { ADDFAVORITEPOSTSLIST, REMOVEFAVORITEPOSTSLIST } from "./types";
import { addFavoritePost } from "../../api";

export const addFavoritePostsList = (post, token) => async (dispatch) => {
  try {
    let existingPosts = JSON.parse(
      window.localStorage.getItem("favoritePostsList")
    );
    existingPosts.push(post);

    window.localStorage.setItem(
      "favoritePostsList",
      JSON.stringify(existingPosts)
    );
    console.log("called");

    // Add Favorite List Data to database
    // const { data } = await addFavoritePost(post, token);

    return {
      if(data) {
        dispatch({
          type: ADDFAVORITEPOSTSLIST,
          payload: post,
        });
      },
    };
  } catch (error) {
    console.log("Error", error);
  }
};

export const removeFavoritePostsList = (postId) => {
  let existingPosts = JSON.parse(
    window.localStorage.getItem("favoritePostsList")
  );
  existingPosts = existingPosts.filter((post) => postId !== post._id);
  window.localStorage.setItem(
    "favoritePostsList",
    JSON.stringify(existingPosts)
  );

  return {
    type: REMOVEFAVORITEPOSTSLIST,
    payload: postId,
  };
};
