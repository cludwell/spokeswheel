import React, { useState, useEffect } from "react";
import getScrollbarWidth from "./_scrollbarWidth";

export default function LogInModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth();
    if (isModalOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore original styles
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    const modal = document.getElementById("my_login_modal");
    if (!isModalOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        className="btn btn-ghost text-xl"
        onClick={toggleModal}
      >
        log in
      </button>
      <dialog id="my_login_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={toggleModal}>close</button>
        </form>
      </dialog>
    </>
  );
}
