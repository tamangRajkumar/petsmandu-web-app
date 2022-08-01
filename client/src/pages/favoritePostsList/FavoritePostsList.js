import React from "react";
import CardsVerticalAligned from "../../components/cards/CardsVerticalAligned";

const FavoritePostsList = () => {
  const favoritePosts = JSON.parse(
    window.localStorage.getItem("favoritePostsList")
  );
  // console.log(favoritePosts[0]);

  return (
    <div className="mt-10 ">
      {favoritePosts.length > 0 ? (
        <p className="text-2xl font-bold text-center ">
          {" "}
          <p className="text-2xl font-bold text-center ">Your Favorite Posts</p>
        </p>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p className="text-2xl font-bold text-center  ">
            Your favorite post is empty
          </p>
        </div>
      )}

      <div className="flex flex-wrap justify-center ">
        {favoritePosts &&
          favoritePosts.map((post) => {
            return (
              <div key={post._id}>
                <CardsVerticalAligned
                  description={post.description}
                  image={post.image.url}
                  address={post.address}
                  title={post.title}
                  post={post}
                  favoritePostsPostRoute={true}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FavoritePostsList;
