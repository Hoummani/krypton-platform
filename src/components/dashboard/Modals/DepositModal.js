/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types
const DepositModal = ({
  children,
  closeModal,
  saveModal,
  modalState,
  title
}) => {
  if (!modalState) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete is-danger" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button is-primary" onClick={saveModal}>
            <strong>Save</strong>
          </a>
          <a className="button is-light" onClick={closeModal}>
            <strong>Cancel</strong>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default DepositModal;
