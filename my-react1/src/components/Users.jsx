import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import avatar from "./img/avatar.png"

const Users = (props) => {
    let path = "/Dialogs/" + props.id;
    return(

      <div className={s.container}>
          <img src={avatar} alt=""/>
          <NavLink className={s.none__link} to={path}> {props.name}  </NavLink>
      </div>
    );
}

export default Users;