import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

// list of restaurants
const ResCard = (props) => {
  const { resData } = props;
  const { name, ratings, prize } = resData;
  const navigate = useNavigate();

  // Hnadle onclick event
  const onClick = () => {
    navigate("/restaurant/:{name}", { state: { resData } });
  };
  //console.log(props + "dd");
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex items-center"
      onClick={onClick}
    >
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600"> Ratings : {ratings}</p>
        <p className="text-gray-600">Prize : {prize}</p>
      </div>
    </div>
  );
};

// Higher order component
export const PromotedResCard = (ResCard) => {
  return (props) => {
    return (
      <div>
        {console.log(props)}
        <label className="absolute bg-yellow-400 text-black rounded-sm ">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
