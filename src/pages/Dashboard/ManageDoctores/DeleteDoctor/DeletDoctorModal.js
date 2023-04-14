import React from "react";

const DeletDoctorModal = ({closeModals, message, closeModal, handelDelete}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
           {message}
          </h3>
          <div className="modal-action">
            <label onClick={() => handelDelete(closeModal)} htmlFor="my-modal" className="btn">
              Delete
            </label>
            <button onClick={closeModals} className="btn btn-ghost">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletDoctorModal;
