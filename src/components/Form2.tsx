import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { updateForm } from "../features/formSlice";

type Category = {
  slug: string;
  name: string;
  url: string;
};

const Form2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);

  const [workplaces, setWorkplaces] = useState<Category[]>([]);
  const [workplace, setWorkplace] = useState(form.workplace);
  const [address, setAddress] = useState(form.address);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      console.log(response.data);
      setWorkplaces(response.data);
    });
  }, []);

  const handleSubmit = () => {
    if (!workplace || !address) {
      alert("Все поля обязательны для заполнения");
      return;
    }

    dispatch(updateForm({ workplace, address }));
    navigate("/form3");
  };

  console.log(workplaces.map((item) => item.slug));

  return (
    <div className="container">
      <h2>Адрес и место работы</h2>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>Место работы:</label>
        <select
          className="select"
          value={workplace}
          onChange={(e) => setWorkplace(e.target.value)}
        >
          <option value="">Выберите место работы</option>
          {workplaces.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-box">
        <label style={{ marginRight: "7px" }}>Адрес проживания:</label>
        <input
          className="input"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button onClick={() => navigate("/form1")}>Назад</button>
      <button onClick={handleSubmit}>Далее</button>
    </div>
  );
};

export default Form2;
