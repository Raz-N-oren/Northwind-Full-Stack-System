import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {

        authService.logout();

        notifyService.success("Bye Bye... See you next time!");

        navigate("/login");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default Logout;
