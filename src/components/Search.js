import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ search, setSearch }) {
  return (
    <div>
      <br />
      <input
        type="text"
        className="col-6"
        placeholder="Search Check list"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <CiSearch className="col-2 srch-icon" />
    </div>
  );
}
