import { Routes, Route } from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";

import { AuthContext } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SuccessMessage from "./messages/SuccessMessage";
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

const initialAuthState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = (data) => {
    setUser(data);
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
            <Route path="/auth/register/successfully" element={<SuccessMessage />} />
            <Route path="/termsAndConditions" element={<TermsAndConditions />} />
            {user.token ? <Route path="/rooms" element={<Rooms />} /> : ""}
            {user.token ? <Route path="/messages" element={<Contact />} /> : ""}
            {user.token ? <Route path="/game/room/user-questions-room" element={<GamePlayUserQuestions />} /> : ""}
            {user.token ? <Route path="/game/room/u-q-start" element={<GamePlayUQStart />} /> : ""}
            {user.token ? <Route path="/admin/user-questions-table" element={<RecievedQuestionsTable />} /> : ""}
            {user.token ? <Route path="/admin/registered-users-table" element={<RegistеredUsersTable />} /> : ""}
            {user.token ? <Route path="/admin/edit-user-question" element={<EditUserQuestionPage />} /> : ""}

          </Routes>

        </main>

        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
