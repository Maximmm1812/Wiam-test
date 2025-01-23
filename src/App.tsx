import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Modal from "./components/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Navigate to="/" replace/> */}
        {/* <Redirect to="/form1" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
