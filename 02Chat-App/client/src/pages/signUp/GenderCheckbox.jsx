import React, { useState } from "react";

function GenderCheckbox({ onCheckboxChange, selectGender }) {
  // const handleGenderMale = () => {
  //   setcheckBoxValue("Male");
  // };

  // const handleGenderFemale = () => {
  //   setcheckBoxValue("Female");
  // };

  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-error"
            // onClick={() => setcheckBoxValue("Male")}
            checked={selectGender === "Male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-accent"
            // onClick={() => setcheckBoxValue("Female")}
            checked={selectGender === "Female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
