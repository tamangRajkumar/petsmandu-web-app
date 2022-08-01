import { ADDFAVORITEPOSTSLIST, REMOVEFAVORITEPOSTSLIST } from "../actions/types";

const initialState = {
  
  favoritePostsList: [],
};
export const userFavoritePostsList = (state = initialState, action) => {
  switch (action.type) {
    case ADDFAVORITEPOSTSLIST:
      return {
        ...state,
        favoritePostsList: [...state.favoritePostsList, action.payload],
      };
      case REMOVEFAVORITEPOSTSLIST:{
        return{
          ...state,
          favoritePostsList: state.favoritePostsList.filter(post => action.payload !== post._id),
        }
      }
    default:
      return state;
  }
};


