import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import useLocalStorage from "./hooks/useLocalStorage";

import { AuthContext } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Rooms from "./components/Rooms";
import Logout from "./components/Logout";
import Contact from "./components/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import About from "./components/About";
import RecievedQuestionsTable from "./components/RecievedQuestionsTable";
import RegistеredUsersTable from "./components/RegistеredUsersTable";
import EditUserQuestionPage from "./components/EditUserQuestionPage";
import GamePlayUserQuestions from "./components/GamePlayUserQuestions";
import GamePlayUQStart from "./components/GamePlayUQStart";
import ErrorPage from "./components/ErrorPage";

const initialAuthState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  useEffect(() => {
    const clearUserDataBeforeLogout = (event) => {
      setUser(initialAuthState);
    };

    window.addEventListener('beforeLogout', clearUserDataBeforeLogout);

    return () => {
      window.removeEventListener('beforeLogout', clearUserDataBeforeLogout);
    };
  }, [setUser]);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div>
        <Navbar />

        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/termsAndConditions" element={<TermsAndConditions />} />
            {user.token ? (
              <>
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/messages" element={<Contact />} />
                <Route path="/game/room/user-questions-room" element={<GamePlayUserQuestions />} />
                <Route path="/game/room/u-q-start" element={<GamePlayUQStart />} />
                <Route path="/admin/user-questions-table" element={<RecievedQuestionsTable />} />
                <Route path="/admin/registered-users-table" element={<RegistеredUsersTable />} />
                <Route path="/admin/edit-user-question" element={<EditUserQuestionPage />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/error" />} />
            )}
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" />} />

          </Routes>

        </main>

        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
