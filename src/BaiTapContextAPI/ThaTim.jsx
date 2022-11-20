import React, { useContext } from "react";
import { AppContext } from "./Context/ModalContext";

const ThaTim = () => {
  const { users, xxx } = useContext(AppContext);

  return (
    <div>
      <div
        className="card-body"
        style={{ width: "220px", backgroundColor: "green" }}
      >
        <button
          href="#"
          className="btn btn-info"
          onClick={() => {
            xxx();
          }}
        >
          Like({users}) <i className="fa fa-heart text-danger"></i>
        </button>
      </div>
    </div>
  );
};

export default ThaTim;
