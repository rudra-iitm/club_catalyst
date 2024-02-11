import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import LoginReg from "./components/LoginReg";
import Clubs from "./components/Clubs";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/Register";
import ForgetPass from "./components/ForgetPass";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import GenReq from "./components/GenReq";

// import { getToken } from "./services/localStorageServices";

function App() {
  const { access_token } = useSelector(state => state.auth)

  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
          <Route path="clubs" element={<Clubs/>} />
          <Route path="sign-up" element={<Register/>} />
          <Route path="sign-in" element={!access_token ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="sent-reset-link" element={<ForgetPass/>} />
          <Route path="request" element={access_token ? <GenReq /> : <Navigate to="/request" />} />
        </Route>
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/sign-in" />} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        <Route path="api/user/reset/:id/:token" element={<ResetPassword/>} />
     </Routes>
    </BrowserRouter> 
 </>
  );
}

export default App;
