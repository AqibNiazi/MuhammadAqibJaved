import React from "react";

const RadioButton = (props) => {
  const { state, setState } = props;
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="Radio"
          id="Yes"
          checked
          onChange={(e) => setState(e.target.id)}
          value={state}
        />
        <label class="form-check-label" for="Yes">
          Yes
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="Radio"
          id="No"
          onChange={(e) => setState(e.target.id)}
          value={state}
        />
        <label class="form-check-label" for="No">
          No
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
