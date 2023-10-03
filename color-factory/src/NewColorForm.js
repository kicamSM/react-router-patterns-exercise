import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** Form for creating a new color to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewColorForm = ({ addColor }) => {
  // const INITIAL_STATE = { color: "" };
  const INITIAL_STATE = { color: "", value: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  /** Send {color} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    console.log('formData:', formData)
    setFormData(INITIAL_STATE);
    history.push("/colors");
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color Name:</label>
      <input
        id="color"
        name="color"
        type="text"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="value">Color Value:</label>
      <input
        id="value"
        name="value"
        type="color"
        value={formData.value}
        onChange={handleChange}
      />


      <button>Add a new color!</button>
    </form>
  );
};

export default NewColorForm;
