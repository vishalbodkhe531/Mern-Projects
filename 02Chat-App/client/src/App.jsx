import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import MessagesContainer from "./components/messages/MessagesContainer";
import Header from "./components/header/Header";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <Header />
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/sign-in"} />}
        />
        <Route
          path="/"
          element={
            authUser ? <MessagesContainer /> : <Navigate to={"/sign-in"} />
          }
        />
        <Route
          path="/sign-in"
          // element={authUser ? <Navigate to={"/"} /> : <SignIn />}
          element={<SignIn />}
        />
        <Route
          path="/sign-up"
          // element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          element={<SignUp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
