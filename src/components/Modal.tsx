import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);

  const handleClose = () => {
    navigate("/form1");
  };
  console.log(form.lastName);
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-content">
          <h3>
            Поздравляем, {form.lastName} {form.firstName}. Вам одобрена{" "}
            {form.loanAmount}$ на {form.loanTerm} дней.
          </h3>
          <button onClick={handleClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
