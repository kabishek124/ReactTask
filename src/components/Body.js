import React from "react";
import ResCard, { PromotedResCard } from "./ResCard";
import { useEffect } from "react/cjs/react.production.min";
import restaurantData from "../utils/ResData";

export const Body = () => {
  // using state variables
  const [resList, setResList] = React.useState(restaurantData);

  const HorderCompo = PromotedResCard(ResCard);
  // Conditional rendering
  return (
    <div className="flex flex-col item-center  gap-8 mt-8 ">
      <div className="justify-center">
        <button
          className="mt-[10px] w-fit p-2 rounded bg-slate-800 text-center text-white"
          onClick={() => {
            setResList(resList.filter((res) => res.ratings >= 4));
          }}
        >
          Filter
        </button>
      </div>
      {console.log(resList)}
      <div className="res-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:cursor-pointer">
          {resList && resList.length > 0 ? (
            resList.map((res, index) => {
              const offer = res.offer && res.offer > 50;
              return offer ? (
                <HorderCompo key={index} resData={res} />
              ) : (
                <ResCard key={index} resData={res} />
              );
            })
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
