import { RootState } from "app/store";
import { updateForm } from "../features/formSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Form1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);

  const [phone, setPhone] = useState(form.phone);
  const [firstName, setFirstName] = useState(form.firstName);
  const [lastName, setLastName] = useState(form.lastName);
  const [gender, setGender] = useState(form.gender);

  const handleSubmit = () => {
    if (!phone || !firstName || !lastName || !gender) {
      alert("Все поля обязательны для заполнения");
      return;
    }

    dispatch(updateForm({ phone, firstName, lastName, gender }));
    navigate("/form2");
  };
  //   console.log(phone)

  return (
    <div className="container">
      <h2>Личные данные</h2>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>Телефон:</label>
        <input
          className="input"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0XXX XXX XXX"
        />
      </div>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>Имя:</label>
        <input
          className="input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>Фамилия:</label>
        <input
          className="input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>Пол:</label>
        <select className="select" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Выберите пол</option>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Далее</button>
    </div>
  );
};

export default Form1;
