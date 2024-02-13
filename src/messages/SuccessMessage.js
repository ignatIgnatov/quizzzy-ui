import { useNavigate } from "react-router-dom";

const SuccessMessage = () => {

    let navigate = useNavigate();
    setTimeout(() => {
        navigate("/auth/login")
    }, 1200);

    return (
        <>
            <header id="head">
                <div className="container">
                    <div className="row" style={{ marginTop: 150 }}>
                        <h2>Registration successful!</h2>
                    </div>
                </div>
            </header>
        </>
    )
}
export default SuccessMessage;