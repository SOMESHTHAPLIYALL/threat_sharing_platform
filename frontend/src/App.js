import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import CreateThreat from "./Pages/CreateThreat";
import AllThreats from "./Pages/AllThreats";
import HistoryPage from "./Pages/HistoryPage";
import UpdatePage from "./Pages/UpdatePage";
import UsersPage from "./Pages/UsersPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/create" element={<CreateThreat />} />
          <Route path="/threats" element={<AllThreats />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
