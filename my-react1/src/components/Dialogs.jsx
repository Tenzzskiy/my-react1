import React from "react";
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Users from "./Users";




const Message = (props) =>{
    return(
        <div>
            {props.message}
        </div>
    );

}






const Dialogs = (props) => {

    let DialogsElements =
        props.state.DialogsData.map(dialog => <Users name={dialog.name} id={dialog.id} /> )

    let MessagesElements =
        props.state.MessagesData.map(Mess => <Message message={Mess.messages} />)

    return (

            <div>
                <div className={s.Header__dialogs}>
                    Dialogs
                </div>
                <div className={s.container}>
                    <div className={s.message}>
                        {DialogsElements}

                    </div>
                    <div>
                        {MessagesElements}
                    </div>

                </div>
            </div>

    );
}

export default Dialogs;