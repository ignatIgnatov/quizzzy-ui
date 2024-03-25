import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";

import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";

const Logout = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.token).then((data) => {
            logout(data);
            localStorage.clear();
            navigate("/");
        }).catch((err) => {
            navigate("/error")
        });
    }, []);

    return null;
};



export default Logout;
