import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyForm from "./pages/SurveyForm";
import SurveyList from "./pages/SurveyList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/surveylist" element={<SurveyList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
