import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import allPetsLists from "../../components/AllPetsLists/allPetsList";
import Cards from "../../components/cards/CardsVerticalAligned";
import { fetchPostsByCategory } from "../../api";
import { useSelector } from "react-redux";

const PetsProblemsAndSolutions = () => {
  const [posts, setPosts] = useState(null);
  const userId = useSelector((state) => state.authUser.currentUser.user._id);


  useEffect(() => {
    if (posts == null) {
      fetchPosts();
    }
  }, [posts == null]);

  const fetchPosts = async () => {
    try {
      let category = "pets_problems_and_solutions";
      const { data } = await fetchPostsByCategory(category);
      setPosts(data.posts);
      console.log(data);
    } catch (error) {
      console.log("Error => ", error);
    }
  };


  const favoritePosts = JSON.parse(
    window.localStorage.getItem("favoritePostsList")
  );
  // console.log(favoritePosts);

  const token = useSelector((state) => state.authUser.currentUser.token);
  console.log(token);

  return (
    <>
      {" "}
      <div>
        {/* Search Filters */}
        <div className="text-center">
          <h1 className="mt-10 font-bold  text-2xl">
            Pets Problems And Solutions
          </h1>

          <div className="flex flex-wrap justify-center">
            {posts &&
              posts.map((post) => {
                return (
                  <Cards
                    description={post.description}
                    image={post.image.url}
                    address={post.address}
                    title={post.title}
                    post={post}
                    userId={userId}
                    token={token}
                    fetchPosts={fetchPosts}
                    isFavoritePost={  favoritePosts && favoritePosts.some(
                      (favPost) => favPost["_id"] === post._id
                    )}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PetsProblemsAndSolutions;
