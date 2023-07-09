import React from "react";

const ToastB = ({ success, message }) => {
  return (
    <>
      <div
        className={`toast align-items-center bg-${success}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
    </>
  );
};

export default ToastB;
