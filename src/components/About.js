import React from "react";
import { useRouteError } from "react-router-dom";
import { User } from "./User";
import UserClass from "./UserClass";

const About = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>About</h1>
      <User name={"Abishek"} age={"23"} />
      <UserClass />
    </div>
  );
};

export default About;
