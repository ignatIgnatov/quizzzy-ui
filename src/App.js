import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import useLocalStorage from "./hooks/useLocalStorage";

import { AuthContext } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Rooms from "./components/GamePlay/Rooms";
import Logout from "./components/Auth/Logout";
import SendQuestionPage from "./components/SendQuestion/SendQuestionPage";
import TermsAndConditions from "./components/TermsAndConditions";
import About from "./components/About";
import RecievedQuestionsTable from "./components/QuestionsTable/RecievedQuestionsTable";
import RegistеredUsersTable from "./components/UsersTable/RegistеredUsersTable";
import EditUserQuestionPage from "./components/QuestionsTable/EditUserQuestionPage";
import GamePlayUserQuestions from "./components/GamePlay/GamePlayUserQuestions";
import GamePlayUQStart from "./components/GamePlay/GamePlayUQStart";
import ErrorPage from "./components/ErrorPage";
import Ranglist from "./components/Ranglist/Ranglist";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Instructions from "./components/ForgotPassword/Instructions";
import SystemMessage from "./components/SystemMessage/SystemMessage";
import UnapprovedQuestionsTable from "./components/QuestionsTable/UnapprovedQuestionsTable";

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
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-pws-instr" element={<Instructions />} />
            {user.token ? (
              <>
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/send-question" element={<SendQuestionPage />} />
                <Route path="/game/ranglist" element={<Ranglist />} />
                <Route path="/game/room/user-questions-room" element={<GamePlayUserQuestions />} />
                <Route path="/game/room/u-q-start" element={<GamePlayUQStart />} />
                <Route path="/admin/user-questions-table" element={<RecievedQuestionsTable />} />
                <Route path="/admin/registered-users-table" element={<RegistеredUsersTable />} />
                <Route path="/admin/edit-user-question" element={<EditUserQuestionPage />} />
                <Route path="/admin/general-msg" element={<SystemMessage />} />
                <Route path="/admin/unapproved-questions-table" element={<UnapprovedQuestionsTable />} />
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
