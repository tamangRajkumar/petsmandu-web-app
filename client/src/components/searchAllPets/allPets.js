import React from "react";
import Cards from "../../components/Cards";
import allPetsList from "../../components/AllPetsLists/allPetsList";

function allPets() {
  return (

      <div>
        {/* All pets List */}
        <h1 className="font-bold text-4xl  ml-20 text-center">
          {" "}
          Explore Various Pets{" "}
        </h1>
        {/* <p className="ml-20 flex justify-center">
          Add filters by place/ price/ location
        </p> */}

        <div className="flex flex-wrap items-center justify-center text-center ">
          {allPetsList.map(function (lists) {
            return (
              <Cards
                key={lists.id}
                name={lists.name}
                img={lists.imgURL}
                place={lists.place}
                rating={lists.rating}
                cost={lists.cost}
                href={lists.forHref}
              />
            );
          })}
        </div>
      </div>

  );
}

export default allPets;
