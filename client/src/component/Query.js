import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

export default function Query() {
  let [value, setValue] = useState("12");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function resetForm() {
    setValue("");
  }
  return (
    <div>
      <form action="/api/getAndAssessMessages">
        <label for="maxResults">Max Results</label>
        <input
          type="number"
          id="maxResults"
          name="maxResults"
          min="1"
          max="20"
          value="10"
          placeholder=""
        />
        <br></br>
        <label for="from">From (A person)</label>
        <input
          type="text"
          id="from"
          name="from"
          class="form-control form"
          placeholder=""
        />
        <br></br>
        <label for="to">To (A person)</label>
        <input type="text" id="to" name="to" />
        <br></br>
        <label for="after">After (a date)</label>
        <input type="date" id="after" name="after" placeholder="" />
        <br></br>
        <label for="before">Before</label>
        <input type="date" id="before" name="before" placeholder="" />
        <br></br>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
