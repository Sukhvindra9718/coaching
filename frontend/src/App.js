import "./App.css";
import React from "react";
import { useEffect} from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadUser } from "./actions/userAction";
import WebFont from "webfontloader"
import Home from "./components/Home/Home";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import LoginSignUp from "./components/User/LoginSignUp"
import ForgotPassword from "./components/User/ForgotPassword"
import ResetPassword from "./components/User/ResetPassword"
import Profile from "./components/User/Profile"
import UpdateProfile from "./components/User/UpdateProfile"
import UpdatePassword from "./components/User/UpdatePassword"
import UserOptions from "./components/layout/Header/userOptions";
import store from "./store"
import AdmissionForm from "./components/Admission/AdmissionForm";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    //eslint-disable-next-line 
  }, []);
  return (
    <BrowserRouter>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        {isAuthenticated && (
          <Route exact path="/account" element={<Profile />} />
        )}
        {isAuthenticated && (
          <Route exact path="/me/update" element={<UpdateProfile />} />
        )}
        {isAuthenticated && (
          <Route exact path="/password/update" element={<UpdatePassword />} />
        )}
        {(
          <Route exact path="/admission" element={<AdmissionForm/>} />
        )}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
