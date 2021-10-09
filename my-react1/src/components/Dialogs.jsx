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
    let newMessage = React.createRef();

    let addMessage = () => {
        let mess = newMessage.current.value;
        alert(mess)
    }

    return (

            <div>
                <div className={s.Header__dialogs}>
                    Dialogs
                </div>
                <div className={s.container}>
                    <div className={s.dialogs}>
                        <div>
                        {DialogsElements}
                    </div>

                    </div>
                    <div>

                        {MessagesElements}
                    </div>

                </div>
                <div className={s.text__area__flex}>
                <div className={s.input__item}>
                    <textarea  className={s.input} type="text" ref={newMessage}/>
                </div>
                <div className={s.input__item}>
                    <button className={s.button} onClick={addMessage}>Send message</button>
                </div>
            </div>
            </div>

    );
}

export default Dialogs;