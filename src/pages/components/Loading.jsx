import React from "react";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <div className="text-center">
        <div className="spinner-border text-danger" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 fw-bold">Loading, please wait...</p>
      </div>
    </div>
  );
}
