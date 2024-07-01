import React, { useEffect, useState } from "react";
import Table from "./Table";
import { FaPlus } from "react-icons/fa";
import Search from "./Search";

export default function Content() {
  let [checkListState, setCheckListState] = useState([]);

  useEffect(() => {
    let obj = JSON.parse(localStorage.getItem("todos"));
    if (obj) {
      setCheckListState(obj);
    }
  }, []);

  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const filteredItems = checkListState.filter((x) => x.id !== id);
    setCheckListState(filteredItems);
    filteredItems
      ? localStorage.setItem("todos", JSON.stringify(filteredItems))
      : localStorage.setItem("todos", []);
  };

  const [name, setName] = useState("");

  const handleAddItem = (name) => {
    if (name.trim() === "") return;

    const id =
      checkListState.length > 0
        ? checkListState[checkListState.length - 1].id + 1
        : 1;

    let newItem = { id: id, name: name, checked: false };
    let updated = [...checkListState, newItem];
    setCheckListState(updated);
    setName("");
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  return (
    <>
      <div style={{ padding: "30px" }} className="container">
        <input
          type="text"
          required
          placeholder="Add Checklist"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-6"
        />
        <FaPlus
          role="button"
          onClick={() => handleAddItem(name)}
          className="col-2 plus-icon"
        />
        <Search search={search} setSearch={setSearch} />
      </div>
      <Table
        item={checkListState.filter((x) =>
          x.name.toLowerCase().includes(search.toLowerCase())
        )}
        handleDeleteItem={handleDelete}
      />
    </>
  );
}
