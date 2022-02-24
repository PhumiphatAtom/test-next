import React from "react";
// import Image from "next/image";

export default function CardRestaurants() {
  return (
    <div>
      <div className="card rounded-none lg:card-side bg-base-100 max-w-3xl mx-auto mb-6">
        <figure>
          <img src="https://dummyimage.com/300x200/000/fff" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          {/* <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      <div className="card rounded-none lg:card-side bg-base-100 max-w-3xl mx-auto mb-6">
        <figure>
          <img src="https://dummyimage.com/300x200/000/fff" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          {/* <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      <div className="card rounded-none lg:card-side bg-base-100 max-w-3xl mx-auto mb-6">
        <figure>
          <img src="https://dummyimage.com/300x200/000/fff" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          {/* <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
