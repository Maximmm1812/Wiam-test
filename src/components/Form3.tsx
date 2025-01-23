import { RootState } from "app/store";
import axios from "axios";
import { updateForm } from "../features/formSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Form3 = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);

  const [loanAmount, setLoanAmount] = useState(form.loanAmount);
  const [loanTerm, setLoanTerm] = useState(form.loanTerm);

  const handleSubmit = async () => {
    if (!loanAmount || !loanTerm) {
      alert("Заполните все поля!");
      return;
    }
    dispatch(updateForm({ loanAmount, loanTerm }));

    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        title: `${form.firstName} ${form.lastName}`,
      });
      console.log("Response from server:", response.data);
      navigate("/modal");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ошибка при отправке данных на сервер");
    }
  };

  return (
    <div className="container">
      <h2>Параметры займа</h2>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>
          Сумма займа ($): {loanAmount}
        </label>
        <input
          className="input-range"
          type="range"
          min="200"
          max="1000"
          step="100"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
      </div>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>
          Срок займа (дни): {loanTerm}
        </label>
        <input
          className="input-range"
          type="range"
          min="10"
          max="30"
          step="1"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
      </div>
      <button onClick={() => navigate("/form2")}>Назад</button>
      <button onClick={handleSubmit}>Подать заявку</button>
    </div>
  );
};

export default Form3;
