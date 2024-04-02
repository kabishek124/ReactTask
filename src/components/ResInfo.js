import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import restaurantData from "../utils/ResData";
import SpecialBoardInfo from "./SpecialBoardInfo";
import { MenuAddition } from "./MenuAddition";
import { Link } from "react-router-dom";

const ResInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resData } = location.state;

  const restMenuDetails = restaurantData.find(
    (res) => res.name == resData.name
  );

  const handleBookTable = () => {
    navigate("/add-menu");
  };

  const isPromoted = resData.offer && parseInt(resData.offer) > 50;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isPromoted ? <SpecialBoardInfo offer={resData.offer} /> : null}
      <div className="max-w-md p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">{resData.name}</h1>
        <p className="mb-2">Ratings: {resData.ratings}</p>
        <p className="mb-4">Prize: Rs.{resData.prize}</p>

        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul>
          {restMenuDetails.menu.map((menu) => (
            <li key={menu.id} className="mb-1">
              {menu.name} - Rs.{menu.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={handleBookTable}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Menu
        </button>
      </div>
    </div>
  );
};

export default ResInfo;
