import * as mailService from "../../services/mailService";

import { useState } from "react";

import PopupWithoutAnimation from "../Popup/PopupWithoutAnimation";

const SystemMessage = () => {

    const [showPopup, setShowPopup] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const message = formData.get("message");

        let field = document.getElementById("message-area");


        mailService.sendMessageToAllUsers(message)
            .then(() => {
                setShowPopup(true);
                field.value = "";
            })
            .catch((error) => alert(error));
    }

    return (
        <div>
            <header id="head" className="secondary"></header>
            <div className="container">
                <ol className="breadcrumb">
                    <li>Admin</li>
                    <li className="active">Send System Message</li>
                </ol>

                <div className="row">
                    <article className="col-sm-9 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Send System Message</h1>
                        </header>
                        <br />
                        <form onSubmit={sendMessage} method="POST">
                            <div className="row">
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <label htmlFor="message">
                                        Message...
                                    </label>
                                    <textarea
                                        id="message-area"
                                        placeholder="Type your message here..."
                                        className="form-control"
                                        name="message"
                                        rows="3"
                                    ></textarea>

                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-sm-6">

                                </div>
                                <div className="col-sm-6 text-right">
                                    <input
                                        className="btn btn-action"
                                        type="submit"
                                        value="Send message"
                                    />
                                    <PopupWithoutAnimation text="messages send..." show={showPopup} setShow={setShowPopup} />
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default SystemMessage;