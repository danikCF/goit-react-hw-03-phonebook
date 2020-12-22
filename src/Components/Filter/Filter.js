import React from "react";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label htmlFor="filter">Find contacts</label>
      <br />
      <input
        type="search"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
