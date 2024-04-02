import { useRouteError } from "react-router-dom";

const Contact = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
