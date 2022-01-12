import { React, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { ErrorBoundary } from "react-error-boundary";
import { fetchUser } from "./utils/fetchUser";

const App = () => {
  const navigate = useNavigate();

  const myErrorHandler = (error, info) => {
    console.log(error, info);
    navigate("/");
  };

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate("/login");
  }, []);

  return (
    <ErrorBoundary onError={myErrorHandler}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
