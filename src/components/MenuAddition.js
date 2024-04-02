import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { useLocation } from "react-router-dom";
import restaurantData from "../utils/ResData";
import { useState } from "react";

export const MenuAddition = () => {
  // const location = useLocation();
  // const resName = location.state.resName;

  const [formFields, setFormFields] = useState([{ menuItem: "", prize: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      menuItem: "",
      prize: "",
    };
    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
    console.log(index);
  };
  return (
    <form
      className="max-w-sm mx-auto p-4 bg-gray-100 rounded-md"
      onSubmit={onSubmit}
    >
      {formFields.map((form, index) => (
        <div key={index} className="mb-4">
          <input
            className="w-full px-2 py-1 text-sm bg-white border border-gray-300 rounded-md"
            name="menuItem"
            onChange={(event) => handleFormChange(event, index)}
            placeholder="Menu-item"
            value={form.menuItem}
          />
          <input
            className="w-full mt-1 px-2 py-1 text-sm bg-white border border-gray-300 rounded-md"
            name="prize"
            onChange={(event) => handleFormChange(event, index)}
            placeholder="prize"
            value={form.prize}
          />
          <button
            className="mt-1 px-2 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
            type="button"
            onClick={() => removeFields(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="w-full mt-1 px-2 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
        type="button"
        onClick={addFields}
      >
        Add Field
      </button>
      <br />
      <button
        className="w-full mt-1 px-2 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 "
        type="submit"
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};
