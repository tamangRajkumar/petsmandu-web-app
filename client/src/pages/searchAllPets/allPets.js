import React from "react";
import Cards from "../../components/cards/Cards";
import allPetsList from "../../components/AllPetsLists/allPetsList";

function allPets() {
  return (
    <div>
     
      <div>
        {/* All Hotels List */}
        <h1 className="font-bold text-4xl mt-10 ml-20 text-center">
          {" "}
          Explore Various Pets{" "}
        </h1>
        <p className="ml-20 flex justify-center">
          Add filters by place/ price/ location
        </p>

        <div className="grid grid-cols-4 gap-4 gap-y-10 items-center justify-center text-center ml-20 mr-20">
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
    </div>
  );
}

export default allPets;
