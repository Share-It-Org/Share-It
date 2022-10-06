import React from 'react'
import '../styles/ItemModal.css';

const itemModal = ({ setIsOpen }) => {
  return (
    <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Item Name</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined">close</span>
        </button>
        <div className="modalContent">
            <div className="label" id="description">Description</div><div>Skittles-Themed Bounce-House</div><br />
            <div className="label" id="location">Location</div><div>Irvine, CA</div><br />
            <div className="label" id="rating">Rating:</div><div>105%</div><br />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="requestBtn" onClick={() => setIsOpen(false)}>
                Request
              </button>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default itemModal