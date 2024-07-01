import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Table({ item, handleDeleteItem }) {
  return item.length === 0 ? (
    <h3
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Your List is Empty
    </h3>
  ) : (
    <ul>
      {item.map((x) => {
        return (
          <>
            <li key={x.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  id="box"
                  type="checkbox"
                  onClick={(e) => {
                    x.checked = !e.target.checked;
                  }}
                />
                <label
                  htmlFor="box"
                  onDoubleClick={(e) => (x.checked = !x.checked)}
                >
                  {x.name}
                </label>
              </div>
              <FaTrash
                role="button"
                className="trashIcon"
                onClick={() => {
                  handleDeleteItem(x.id);
                }}
              />
            </li>
            <br />
          </>
        );
      })}
    </ul>
  );
}
