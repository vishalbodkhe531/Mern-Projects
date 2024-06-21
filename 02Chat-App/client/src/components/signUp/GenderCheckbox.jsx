import React, { useState } from "react";

function GenderCheckbox() {
  const [checkBoxValue, setcheckBoxValue] = useState("");

  console.log(checkBoxValue);

  // const handleGenderMale = () => {
  //   setcheckBoxValue("Male");
  // };

  // const handleGenderFemale = () => {
  //   setcheckBoxValue("Female");
  // };

  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-error"
            onClick={() => setcheckBoxValue("Male")}
            checked={checkBoxValue === "Male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-accent"
            onClick={() => setcheckBoxValue("Female")}
            checked={checkBoxValue === "Female"}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
