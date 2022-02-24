import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-300 border-2">
      <div className="flex-1">
        <img src="https://dummyimage.com/75x50/000htt/fff" alt="" />
        <a className="normal-case text-xl pl-1">Website Name</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Search</span>
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
